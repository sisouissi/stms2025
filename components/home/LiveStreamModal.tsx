import React from 'react';
import { X } from 'lucide-react';

interface LiveStreamModalProps {
  onClose: () => void;
}

// REMPLACEZ 'YOUR_YOUTUBE_VIDEO_ID' PAR L'ID DE VOTRE VIDÉO OU FLUX EN DIRECT
// Exemple: pour l'URL https://www.youtube.com/watch?v=jfKfPfyJRdk, l'ID est 'jfKfPfyJRdk'
const YOUTUBE_VIDEO_ID = 'jfKfPfyJRdk';

const LiveStreamModal: React.FC<LiveStreamModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in" 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-bold text-white">Diffusion en Direct du Congrès</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white p-2 -m-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Fermer la vidéo"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamModal;
