
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (prompt: string, history: { role: string; parts: string }[]) => {
  // Move environment check inside the function to prevent module-level crashes
  let apiKey = "";
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      apiKey = process.env.API_KEY;
    }
  } catch (e) {
    console.warn("API_KEY could not be retrieved from process.env");
  }

  if (!apiKey) {
    return "AI Assistant is currently unavailable because the API Key is not configured.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { 
          role: 'user', 
          parts: [{ text: "You are the AI assistant for a world-class Full Stack Developer. Answer questions about their skills (React, Node, AI), experience (5+ years), and projects. Respond in the language used by the user." }] 
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
    return "An error occurred while connecting to the AI. Please try again later.";
  }
};
