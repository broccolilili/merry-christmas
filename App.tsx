import React, { useState, useCallback } from 'react';
import Scene3D from './components/Scene3D';
import HandController from './components/HandController';
import { AppState, GestureType } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.TREE_FORM);
  const [handPosition, setHandPosition] = useState<{ x: number, y: number } | null>(null);
  const [notification, setNotification] = useState<string>('Show FIST to form tree, OPEN PALM to scatter.');

  const handleGestureChange = useCallback((gesture: GestureType) => {
    switch (gesture) {
      case GestureType.CLOSED_FIST:
        setAppState(AppState.TREE_FORM);
        setNotification('Tree Form Activated');
        break;
      case GestureType.OPEN_PALM:
        setAppState(AppState.SCATTER_FORM);
        setNotification('Scatter Mode: Move hand to float');
        break;
      default:
        break;
    }
  }, []);

  const handleHandMove = useCallback((x: number, y: number) => {
    setHandPosition({ x, y });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#001a10]">
      {/* 3D Background */}
      <Scene3D 
        appState={appState} 
        handPosition={handPosition} 
      />

      {/* Hand Tracker Logic (Invisible logic) */}
      <HandController 
        onGestureChange={handleGestureChange} 
        onHandMove={handleHandMove} 
      />

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#eebb55] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
            Merry Christmas
          </h1>
          <p className="text-[#006b48] bg-black/40 backdrop-blur-sm px-3 py-1 rounded mt-2 inline-block border border-[#eebb55]/30">
            {notification}
          </p>
        </div>
      </div>

      {/* Current State Indicator */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-4 pointer-events-none opacity-50">
        {[
          { id: AppState.TREE_FORM, label: 'Tree' },
          { id: AppState.SCATTER_FORM, label: 'Scatter' },
        ].map(s => (
          <div key={s.id} className={`flex items-center gap-2 transition-all ${appState === s.id ? 'opacity-100 scale-110' : 'opacity-40'}`}>
            <div className={`w-3 h-3 rounded-full ${appState === s.id ? 'bg-[#ff0000] shadow-[0_0_8px_#ff0000]' : 'bg-[#eebb55]'}`} />
            <span className="text-[#eebb55] font-serif tracking-widest text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;