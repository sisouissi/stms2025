import React from 'react';
import type { Poster } from '../../types';
import { X, User, Building, FileText } from 'lucide-react';

interface PosterModalProps {
  poster: Poster;
  onClose: () => void;
}

const PosterModal: React.FC<PosterModalProps> = ({ poster, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-200 flex items-start justify-between flex-shrink-0 bg-slate-50 rounded-t-xl">
            <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <FileText size={32} />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900">{poster.title}</h2>
                </div>
            </div>
            <button onClick={onClose} aria-label="Fermer" className="text-slate-500 hover:text-slate-700 p-2 -m-2 rounded-full hover:bg-slate-200 transition-colors">
              <X size={24} />
            </button>
        </div>
        <div className="p-6 overflow-y-auto">
            <div className="mb-6 space-y-3 text-sm">
                <div className="flex items-start">
                  <User size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800">{poster.authors}</span>
                </div>
                <div className="flex items-start">
                  <Building size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{poster.affiliation}</span>
                </div>
            </div>

            {poster.summary ? (
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Résumé</h3>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{poster.summary}</p>
                </div>
            ) : (
                <p className="text-slate-500">Aucun résumé disponible pour ce poster.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default PosterModal;