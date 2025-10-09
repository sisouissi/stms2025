import React, { useState, useEffect } from 'react';
import { Youtube, MessageSquare } from 'lucide-react';
import QuestionModal from '../components/programme/QuestionModal';
import type { Session } from '../types';

// --- CONFIGURATION DES FLUX EN DIRECT ---
const STREAMS = [
    {
        day: 'Vendredi 10 Octobre',
        // ID de la vidéo YouTube pour le vendredi
        videoId: 'ki3cZmvfi_U'
    },
    {
        day: 'Samedi 11 Octobre',
        // ID de la vidéo YouTube pour le samedi
        videoId: 'cfUjwHyFPy0' 
    }
];

const LiveStreamPage: React.FC = () => {
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  const getDefaultStreamIndex = () => {
      const now = new Date();
      // Comparaison simple sur le jour du mois. Pour 2025, le 11 octobre est un samedi.
      if (now.getFullYear() === 2025 && now.getMonth() === 9 && now.getDate() === 11) {
          return 1; // Samedi
      }
      return 0; // Vendredi par défaut
  };

  const [activeStreamIndex, setActiveStreamIndex] = useState(getDefaultStreamIndex);
  
  useEffect(() => {
    // Cette fonction s'assure que si la date change (passage de minuit), l'onglet se met à jour.
    const interval = setInterval(() => {
        const newIndex = getDefaultStreamIndex();
        if (newIndex !== activeStreamIndex) {
            setActiveStreamIndex(newIndex);
        }
    }, 60 * 1000); // Vérifie toutes les minutes

    return () => clearInterval(interval);
  }, [activeStreamIndex]);


  const activeStream = STREAMS[activeStreamIndex];

  // Un objet session fictif pour la modale de question, mis à jour selon le direct actif
  const liveSession: Session = {
    id: `livestream-${activeStream.day.replace(/\s+/g, '-')}`,
    title: `Session en direct - ${activeStream.day}`,
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
          
          <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1 bg-slate-200/80 p-1 rounded-xl">
                  {STREAMS.map((stream, index) => (
                      <button
                          key={stream.day}
                          onClick={() => setActiveStreamIndex(index)}
                          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            activeStreamIndex === index
                              ? 'bg-white text-[#033238] shadow-md'
                              : 'text-slate-600 hover:text-slate-800'
                          }`}
                      >
                          {stream.day}
                      </button>
                  ))}
              </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 sm:p-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                    src={`https://www.youtube.com/embed/${activeStream.videoId}?autoplay=1&rel=0`}
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
                      <span>10h30 - 13h30</span>
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