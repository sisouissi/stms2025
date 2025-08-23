// This file is a Vercel serverless function.
// It receives requests from the app, calls the Google Gemini API using
// the secret API key stored in Vercel environment variables,
// and returns the response to the app.
// The API key is never exposed to the browser.
import { GoogleGenAI } from "@google/genai";

// A helper function to send JSON responses consistently
const sendJson = (response, statusCode, data) => {
  response.status(statusCode).json(data);
};

// Using default export for ES Modules compatibility
export default async function handler(request, response) {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return sendJson(response, 405, { error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.API_KEY; // As per Gemini guidelines

    // Check if the API key is configured on the Vercel server
    if (!apiKey) {
      console.error('The API_KEY environment variable is not set on the server.');
      return sendJson(response, 500, { error: "Server configuration is incomplete." });
    }
    
    const ai = new GoogleGenAI({ apiKey });
    
    const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    const { type, payload } = body || {};

    if (!type || !payload) {
      return sendJson(response, 400, { error: 'Malformed request. Type or payload is missing.' });
    }

    if (type === 'briefing') {
        const { agenda } = payload;
        if (!agenda || !Array.isArray(agenda)) {
          return sendJson(response, 400, { error: 'Agenda for briefing is missing or not an array.' });
        }

        const agendaSummary = agenda.map(s => {
            const time = new Date(s.startTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            return `- ${time}: "${s.title}"`;
        }).join('\n');

        const systemInstruction = "You are a friendly and helpful conference assistant for the '29ème Congrès National de Pneumologie'. Your tone is encouraging and professional, but warm. You write in French.";
        const userContent = `Based on my personal agenda for today, please generate a short, personalized daily briefing.

        My agenda:
        ${agendaSummary}
        
        Here are the rules:
        1. Start with a warm greeting like "Bonjour !" or "Bonjour et excellente journée !".
        2. Briefly summarize the day's schedule in one or two engaging sentences. Mention the number of sessions.
        3. End with an encouraging closing remark like "Passez un excellent congrès !" or "Profitez bien de cette journée enrichissante !".
        4. The entire response should be a single paragraph.`;

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userContent,
            config: { systemInstruction }
        });
        
        return sendJson(response, 200, { result: result.text });

    } else {
      return sendJson(response, 400, { error: 'Invalid request type.' });
    }

  } catch (error) {
    console.error('Error in proxy function:', error);
    // Ensure we always send a JSON error response
    const errorMessage = error instanceof Error ? error.message : 'An internal server error occurred.';
    if (!response.headersSent) {
      return sendJson(response, 500, { error: errorMessage });
    }
  }
}