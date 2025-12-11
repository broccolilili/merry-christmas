import React, { useEffect, useRef, useState } from 'react';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { GestureType } from '../types';

interface HandControllerProps {
  onGestureChange: (gesture: GestureType) => void;
  onHandMove: (x: number, y: number) => void;
}

const HandController: React.FC<HandControllerProps> = ({ onGestureChange, onHandMove }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const handLandmarkerRef = useRef<HandLandmarker | null>(null);
  const lastGestureTimeRef = useRef(0);

  useEffect(() => {
    const initHandLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );
      
      handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 1
      });
      setLoaded(true);
    };

    initHandLandmarker();
  }, []);

  useEffect(() => {
    if (!loaded || !videoRef.current) return;

    const video = videoRef.current;
    
    const enableCam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.addEventListener("loadeddata", predictWebcam);
        } catch (err) {
            console.error(err);
        }
    };

    let animationId: number;
    let lastVideoTime = -1;

    const predictWebcam = async () => {
      if (video.currentTime !== lastVideoTime && handLandmarkerRef.current) {
        lastVideoTime = video.currentTime;
        const startTimeMs = performance.now();
        const results = handLandmarkerRef.current.detectForVideo(video, startTimeMs);

        if (results.landmarks && results.landmarks.length > 0) {
           const landmarks = results.landmarks[0];
           const palmX = (landmarks[0].x + landmarks[9].x) / 2;
           const palmY = (landmarks[0].y + landmarks[9].y) / 2;
           onHandMove(1 - palmX, palmY);

           const isFist = [8, 12, 16, 20].every(idx => landmarks[idx].y > landmarks[idx - 2].y);
           const isOpen = [8, 12, 16, 20].every(idx => landmarks[idx].y < landmarks[idx - 2].y);

           let gesture = GestureType.UNKNOWN;
           if (isFist) {
               gesture = GestureType.CLOSED_FIST;
           } else if (isOpen) {
               gesture = GestureType.OPEN_PALM;
           }
           
           if (Date.now() - lastGestureTimeRef.current > 200) {
               onGestureChange(gesture);
               lastGestureTimeRef.current = Date.now();
           }
        }
      }
      animationId = window.requestAnimationFrame(predictWebcam);
    };

    enableCam();

    return () => {
        cancelAnimationFrame(animationId);
        if(video.srcObject) {
             const tracks = (video.srcObject as MediaStream).getTracks();
             tracks.forEach(t => t.stop());
        }
    };
  }, [loaded, onGestureChange, onHandMove]);

  // Hidden container, but video must exist in DOM
  return (
    <div className="fixed bottom-0 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden">
        <video ref={videoRef} autoPlay playsInline muted className="w-1 h-1"></video>
    </div>
  );
};

export default HandController;