// This file is a Vercel serverless function.
// It acts as a secure proxy between the app and a Google Apps Script Web App
// that interfaces with a Google Sheet used as a simple database for questions.

// --- INSTRUCTIONS DE CONFIGURATION (TRÈS IMPORTANT) ---
// Pour que ce système de questions fonctionne, vous devez créer un backend simple avec Google Sheets.
// Suivez ces étapes attentivement :
//
// 1. CRÉER LA FEUILLE GOOGLE SHEETS :
//    - Créez une nouvelle feuille de calcul Google Sheets (https://sheets.new).
//    - Renommez la première feuille (en bas) en "Questions".
//    - Créez les en-têtes de colonnes suivants dans la première ligne :
//      A1: Timestamp, B1: SessionID, C1: Question, D1: Status
//
// 2. CRÉER LE SCRIPT GOOGLE APPS :
//    - Dans votre feuille de calcul, allez dans "Extensions" > "Apps Script".
//    - Effacez tout le code existant et collez TOUT le code qui se trouve entre les lignes "DÉBUT DU CODE À COPIER" et "FIN DU CODE À COPIER".
//    - Enregistrez le projet (icône de disquette).
//
// 3. DÉPLOYER LE SCRIPT COMME APPLICATION WEB :
//    - En haut à droite de l'éditeur de script, cliquez sur **"Déployer"** puis **"Nouveau déploiement"**.
//    - Une nouvelle fenêtre s'ouvre. Cliquez sur l'icône d'engrenage (⚙️) à côté de "Sélectionner le type" et choisissez **"Application Web"**.
//    - Remplissez les champs comme suit :
//        - **Description :** (Optionnel) "API Questions STMS 2025"
//        - **Exécuter en tant que :** **Moi (votre.email@gmail.com)**
//        - **Qui a accès :** **N'importe qui**
//    - **ATTENTION :** Choisir "N'importe qui" est **crucial**. Si vous choisissez une autre option, l'application ne fonctionnera pas et affichera une erreur.
//    - Cliquez sur **"Déployer"**.
//
// 4. AUTORISER ET COPIER L'URL :
//    - Une fenêtre d'autorisation apparaîtra. Cliquez sur **"Autoriser l'accès"**.
//    - Choisissez votre compte Google.
//    - Vous verrez un avertissement "Google n'a pas validé cette application". C'est normal. Cliquez sur "Paramètres avancés" puis sur "Accéder à [Nom de votre projet] (non sécurisé)".
//    - Accordez les permissions demandées.
//    - Une fois le déploiement terminé, une URL se terminant par `/exec` vous sera fournie. **Copiez cette URL**. C'est l'URL de votre application web.
//
// 5. CONFIGURER LA VARIABLE D'ENVIRONNEMENT :
//    - Dans votre projet Vercel (ou autre plateforme d'hébergement), créez une nouvelle variable d'environnement nommée `GOOGLE_APPS_SCRIPT_URL`.
//    - Collez l'URL que vous venez de copier comme valeur pour cette variable.
//    - Redéployez votre projet pour que la variable soit prise en compte.
//
// --- TROUBLESHOOTING / DÉPANNAGE ---
//
// **Erreur 404 pendant l'autorisation ("The requested URL was not found") :**
// - Cette erreur est rare et suggère un problème avec le projet de script lui-même.
// - **Solution :** Essayez de redéployer. Allez dans "Déployer" > "Gérer les déploiements", supprimez l'ancien déploiement, puis créez un "Nouveau déploiement". Si le problème persiste, le plus simple est de recommencer avec une nouvelle feuille de calcul et un nouveau projet de script.
//
// **L'application affiche "Réponse inattendue du service de questions..." :**
// - C'est l'erreur la plus courante. Elle signifie que le script n'est pas accessible publiquement.
// - **Solution :** Vérifiez votre déploiement. Allez dans "Déployer" > "Gérer les déploiements", cliquez sur votre déploiement actif. Assurez-vous que le paramètre "Qui a accès" est bien réglé sur **"N'importe qui"** et non sur "N'importe qui avec un compte Google" ou "Moi uniquement". Si vous corrigez ce paramètre, vous devez créer un **nouveau déploiement** pour que la modification soit prise en compte.
//
// **Mes modifications du script ne fonctionnent pas :**
// - Chaque fois que vous modifiez le code du script, vous devez créer un **nouveau déploiement** pour publier les changements. Aller dans "Déployer" > "Nouveau déploiement".
//
// --- DÉBUT DU CODE À COPIER DANS GOOGLE APPS SCRIPT ---

const SHEET_NAME = 'Questions';

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    // On ignore la première ligne (en-têtes)
    if (sheet.getLastRow() < 2) {
       return ContentService
        .createTextOutput(JSON.stringify({ success: true, questions: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();

    const questions = data.map((row, index) => {
      return {
        id: index + 2, // Le numéro de ligne comme ID unique
        timestamp: row[0],
        sessionId: row[1],
        question: row[2],
        status: row[3]
      };
    }).filter(q => q.sessionId === 'livestream');

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, questions: questions.reverse() })) // Les plus récentes en premier
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Attendre jusqu'à 30 secondes
  
  try {
    const requestData = JSON.parse(e.postData.contents);
    
    if (requestData.action === 'addQuestion') {
      const { sessionId, text } = requestData;
      
      if (!text || text.trim() === "") {
         throw new Error("Le texte de la question ne peut pas être vide.");
      }

      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
      const newRow = [new Date(), sessionId, text.trim(), 'new'];
      sheet.appendRow(newRow);

      return ContentService
        .createTextOutput(JSON.stringify({ success: true, message: 'Question ajoutée avec succès.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Vous pouvez ajouter d'autres actions ici, par ex. pour mettre à jour le statut
    // if (requestData.action === 'updateStatus') { ... }

    throw new Error("Action non valide spécifiée.");

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// --- FIN DU CODE À COPIER DANS GOOGLE APPS SCRIPT ---


const sendJson = (response, statusCode, data) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.status(statusCode).json(data);
};

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    return sendJson(response, 200, {});
  }

  const SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!SCRIPT_URL) {
    console.error('GOOGLE_APPS_SCRIPT_URL environment variable is not set.');
    return sendJson(response, 500, { error: 'Erreur de configuration du serveur.' });
  }

  try {
    const scriptResponse = await fetch(SCRIPT_URL, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: request.method === 'POST' ? JSON.stringify(request.body) : null,
      redirect: 'follow'
    });

    // Check for non-OK responses first.
    if (!scriptResponse.ok) {
        const errorText = await scriptResponse.text();
        console.error(`Google Apps Script returned a non-OK status (${scriptResponse.status}): ${errorText}`);
        return sendJson(response, scriptResponse.status, { error: `Le service de questions a retourné une erreur (${scriptResponse.status}).` });
    }

    // IMPORTANT FIX: Check the content-type header. Google Apps Script can return a 200 OK with an HTML login page
    // if the permissions are set incorrectly ('Anyone with a Google account' instead of 'Anyone').
    const contentType = scriptResponse.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        const responseSample = await scriptResponse.text();
        console.error(`Google Apps Script returned an invalid content-type: ${contentType}. This may indicate a permission error. Response starts with: ${responseSample.substring(0, 200)}`);
        return sendJson(response, 500, { error: 'Réponse inattendue du service de questions. Vérifiez les permissions du script Google.' });
    }

    // If we are here, we expect valid JSON.
    const responseText = await scriptResponse.text();
    try {
        const result = JSON.parse(responseText);
        return sendJson(response, 200, result);
    } catch (e) {
        // This catch block handles cases where the content-type is JSON but the body is malformed.
        console.error('Failed to parse JSON from Google Apps Script. Response was:', responseText);
        return sendJson(response, 500, { error: 'Le service de questions a retourné une réponse JSON invalide.' });
    }

  } catch (error) {
      console.error('Error proxying request to Google Apps Script:', error);
      return sendJson(response, 500, { error: error.message });
  }
}