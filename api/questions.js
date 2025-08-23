// This file is a Vercel serverless function.
// It acts as a secure proxy between the app and a Google Apps Script Web App
// that interfaces with a Google Sheet used as a simple database.

const sendJson = (response, statusCode, data) => {
  response.status(statusCode).json(data);
};

export default async function handler(request, response) {
  const SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!SCRIPT_URL) {
    console.error('GOOGLE_APPS_SCRIPT_URL environment variable is not set.');
    return sendJson(response, 500, { error: 'Erreur de configuration du serveur.' });
  }

  if (request.method === 'POST') {
    // For submitting a new question or marking one as answered
    try {
      const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;

      const scriptResponse = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        redirect: 'follow'
      });
      
      const responseText = await scriptResponse.text();

      if (!scriptResponse.ok) {
        console.error(`Google Apps Script returned an error (status ${scriptResponse.status}): ${responseText}`);
        throw new Error(`Le service de questions a retourné une erreur. Statut: ${scriptResponse.statusText}`);
      }

      try {
        const result = JSON.parse(responseText);
        return sendJson(response, 200, result);
      } catch (e) {
        console.error('Failed to parse JSON from Google Apps Script. Response was:', responseText);
        throw new Error('Le service de questions a retourné une réponse invalide.');
      }

    } catch (error) {
      console.error('Error posting data to Google Apps Script:', error);
      return sendJson(response, 500, { error: error.message });
    }
  }

  if (request.method === 'GET') {
    // For moderators to fetch questions for a session
    try {
      const sessionId = request.query.sessionId;
      if (!sessionId) {
        return sendJson(response, 400, { error: 'sessionId parameter is required.' });
      }

      const fetchUrl = new URL(SCRIPT_URL);
      fetchUrl.searchParams.append('sessionId', sessionId);

      const scriptResponse = await fetch(fetchUrl.toString(), {
        method: 'GET',
        redirect: 'follow'
      });
      
      const responseText = await scriptResponse.text();

      if (!scriptResponse.ok) {
        console.error(`Google Apps Script returned an error (status ${scriptResponse.status}): ${responseText}`);
        throw new Error(`Le service de questions a retourné une erreur. Statut: ${scriptResponse.statusText}`);
      }

      try {
        const questions = JSON.parse(responseText);
        return sendJson(response, 200, questions);
      } catch (e) {
        console.error('Failed to parse JSON from Google Apps Script. Response was:', responseText);
        throw new Error('Le service de questions a retourné une réponse invalide.');
      }

    } catch (error) {
      console.error('Error fetching data from Google Apps Script:', error);
      return sendJson(response, 500, { error: error.message });
    }
  }

  // If method is not POST or GET
  return sendJson(response, 405, { error: 'Method Not Allowed' });
}