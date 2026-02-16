
import { GoogleGenAI } from "@google/genai";

// Extremely safe way to access environment variables in a browser context
const getApiKey = () => {
  try {
    // Check if process and process.env exist before accessing
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Environment variable access failed, falling back to empty string.");
  }
  return "";
};

export const getAIResponse = async (prompt: string, history: { role: string; parts: string }[]) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return "API Key is not configured in the environment. Please check your setup.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { 
          role: 'user', 
          parts: [{ text: "You are the AI assistant for a world-class Full Stack Developer. You answer questions about their skills, experience, and projects. Keep answers professional but friendly. If asked in Bengali, respond in Bengali. Current user query follows." }] 
        },
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: [{ text: h.parts }] 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently unavailable. Please try again later.";
  }
};
