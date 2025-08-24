import React, { useState } from 'react';
import { Youtube, MessageSquare } from 'lucide-react';
import QuestionModal from '../components/programme/QuestionModal';
import type { Session } from '../types';

// REMPLACEZ 'YOUR_YOUTUBE_VIDEO_ID' PAR L'ID DE VOTRE VIDÉO OU FLUX EN DIRECT
// Exemple: pour l'URL https://www.youtube.com/watch?v=jfKfPfyJRdk, l'ID est 'jfKfPfyJRdk'
const YOUTUBE_VIDEO_ID = 'jfKfPfyJRdk';

const LiveStreamPage: React.FC = () => {
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  // Un objet session fictif pour la modale de question
  const liveSession: Session = {
    id: 'livestream-main',
    title: 'Session en direct du Congrès',
    startTime: new Date(),
    endTime: new Date(),
    location: 'En ligne',
    speakers: [],
    theme: 'Direct',
    type: 'livestream',
    description: '',
    details: [],
  };


  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
              <Youtube className="w-10 h-10 text-rose-500" />
              <h1 className="text-4xl font-bold text-slate-900 tracking-tighter">Diffusion en Direct</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 sm:p-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
              ></iframe>
              </div>
          </div>
          
          <div className="mt-8 text-center">
            <button
                onClick={() => setIsQuestionModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                <MessageSquare size={20} />
                Poser une question aux orateurs
            </button>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Horaires de diffusion</h2>
              <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-3">
                      <span className="font-semibold text-slate-800">Vendredi 10 Octobre 2025 :</span>
                      <span>10h45 - 18h45</span>
                  </li>
                  <li className="flex items-center gap-3">
                      <span className="font-semibold text-slate-800">Samedi 11 Octobre 2025 :</span>
                      <span>08h30 - 14h00</span>
                  </li>
              </ul>
          </div>
        </main>
      </div>
      {isQuestionModalOpen && (
        <QuestionModal 
            session={liveSession} 
            onClose={() => setIsQuestionModalOpen(false)} 
        />
      )}
    </>
  );
};

export default LiveStreamPage;