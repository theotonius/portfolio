
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIResponse = async (prompt: string, history: { role: string; parts: string }[]) => {
  if (!API_KEY) return "API Key not configured. Please check environment variables.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: "You are the AI assistant for a world-class Full Stack Developer. You answer questions about their skills, experience, and projects. Keep answers professional but friendly. If asked in Bengali, respond in Bengali. Current user query follows." } ] },
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts }] })),
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
    return "Error communicating with the AI. Please try again later.";
  }
};
