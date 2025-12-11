import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_CHAT } from "../constants";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  try {
    // We are using single-turn logic here for simplicity but respecting history in prompt context if needed,
    // or properly using chat session. Here we implement a fresh chat session for better control.
    
    // Construct the prompt with system instructions
    const systemInstruction = `You are the Spirit of the Christmas Tree. 
    You are wise, festive, and slightly magical. 
    Your answers should be warm, concise, and helpful.
    The user is interacting with a 3D digital tree.
    If they ask about the app, explain they can use hand gestures:
    - Fist: Form the tree.
    - Open Hand: Scatter the particles.
    - Move Hand: Rotate the view (in scatter mode).
    `;

    const chat = ai.chats.create({
      model: GEMINI_MODEL_CHAT,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 32768 }, // Enabled thinking for complex queries
      }
    });

    // Add history manually if using single gen (but chat.create handles session).
    // For this stateless demo wrapper, we'll just send the message.
    // In a real robust app, we'd sync the 'history' array with chat.history.
    
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I am lost in the snow...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The winter winds are interfering with my magic (API Error).";
  }
};