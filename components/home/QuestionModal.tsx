import React from 'react';
import type { Session } from '../../types';
import { X, ExternalLink } from 'lucide-react';

interface QuestionModalProps {
  session: Session;
  onClose: () => void;
}

// INSTRUCTIONS POUR L'UTILISATEUR :
// 1. Créez un Google Form avec des champs pour la question et le nom.
// 2. Allez dans "Envoyer" > icône de lien (🔗), et copiez le lien.
// 3. Optionnel mais recommandé : Pour pré-remplir le titre de la session :
//    a. Allez dans le menu "..." > "Obtenir le lien pré-rempli".
//    b. Remplissez le champ correspondant au titre de la session avec le texte `SESSION_TITLE_PLACEHOLDER`.
//    c. Cliquez sur "Obtenir le lien" et copiez-le.
// 4. Remplacez l'URL ci-dessous par votre lien.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url";


const QuestionModal: React.FC<QuestionModalProps> = ({ session, onClose }) => {
    
    // Si vous utilisez un lien pré-rempli, décommentez la ligne ci-dessous et assurez-vous que votre URL contient `...&entry.12345=SESSION_TITLE_PLACEHOLDER`
    // const formUrl = GOOGLE_FORM_URL.replace('SESSION_TITLE_PLACEHOLDER', encodeURIComponent(session.title));
    const formUrl = GOOGLE_FORM_URL; // Ligne à commenter si vous utilisez un lien pré-rempli

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900">Poser une question</h2>
                    <p className="text-sm text-slate-500 mt-1">Pour la session : "{session.title}"</p>
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 -m-2 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} />
                    </button>
                </div>
                
                <div className="p-8 text-center">
                    <p className="text-slate-600 mb-6">
                        Pour garantir une expérience fluide et fiable, nous utilisons Google Forms pour recueillir les questions.
                        Cliquez sur le bouton ci-dessous pour ouvrir le formulaire dans un nouvel onglet.
                    </p>
                    <a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <ExternalLink size={20} />
                        Ouvrir le formulaire de question
                    </a>
                </div>
            </div>
        </div>
    );
};

export default QuestionModal;