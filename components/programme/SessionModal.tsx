import React from 'react';
import type { Session } from '../../types';
import { getThemeColor } from '../../constants';
import { useAgenda } from '../../context/AgendaContext';
import { X, Check, Plus, Heart, Shield, Mic } from 'lucide-react';
import type { Tab } from '../../App';

interface SessionModalProps {
  session: Session;
  onClose: () => void;
  setActiveTab: (tab: Tab) => void;
}

const SessionModal: React.FC<SessionModalProps> = ({ session, onClose, setActiveTab }) => {
  const { 
    personalAgenda, 
    favorites, 
    toggleFavorite, 
    addToAgenda, 
    removeFromAgenda,
  } = useAgenda();

  const isFavorite = favorites.has(session.id);
  const isInAgenda = personalAgenda.some(s => s.id === session.id);
  
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className={`p-6 rounded-t-2xl text-white ${getThemeColor(session.theme)}`}>
           <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20`}>{session.type}</span>
                {session.isParallel && <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-white/20 rounded-full">Parallèle</span>}
              </div>
              <h2 className="text-2xl font-bold">{session.title}</h2>
              <p className="opacity-80 mt-1">
                {session.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {session.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | {session.location}
              </p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white p-1 -m-1 rounded-full hover:bg-white/20 transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>
        
          <>
            <div className="p-6 overflow-y-auto">
              {session.introduction && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Introduction</h3>
                  <p className="text-slate-700 leading-relaxed">{session.introduction}</p>
                </div>
              )}

              {session.objectives && session.objectives.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Objectifs de la séance</h3>
                  <ul className="space-y-2">
                    {session.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`w-2 h-2 ${getThemeColor(session.theme)} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        <span className="text-slate-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {session.details.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Programme détaillé</h3>
                  <ul className="space-y-2">
                    {session.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`w-2 h-2 ${getThemeColor(session.theme)} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
               {session.id === 'j2-6' && (
                <div className="mt-4 mb-2">
                    <button
                        onClick={() => {
                            onClose();
                            setActiveTab('orals');
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                    >
                        <Mic size={18} />
                        Voir toutes les communications orales
                    </button>
                </div>
              )}
              {session.moderators && session.moderators.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield size={20} className="text-slate-500" />
                    Modération
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {session.moderators.map((moderator, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-lg font-medium text-white flex-shrink-0 mt-1">
                          {moderator.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="font-semibold text-slate-900">{moderator}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {session.speakers.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Orateurs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {session.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-lg font-medium text-white flex-shrink-0 mt-1">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="font-semibold text-slate-900">{speaker.name}</div>
                          <div className="text-sm text-slate-600">{speaker.specialty}</div>
                          {speaker.role && <div className="text-sm text-slate-500 mt-1 leading-tight">{speaker.role}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-3 p-6 border-t border-slate-200 bg-slate-50 rounded-b-2xl">
                <button onClick={() => toggleFavorite(session.id)} className={`flex items-center justify-center gap-2 w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg font-semibold transition-colors ${isFavorite ? 'bg-rose-100 text-rose-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>
                    <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'}/>
                    Favoris
                </button>
                <button onClick={() => { isInAgenda ? removeFromAgenda(session.id) : addToAgenda(session); }} className={`flex items-center justify-center gap-2 w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${isInAgenda ? 'bg-[#d9e5e7] text-[#033238]' : 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-700'}`}>
                    {isInAgenda ? <Check size={16}/> : <Plus size={16}/>}
                    {isInAgenda ? 'Dans l\'agenda' : 'Ajouter'}
                </button>
            </div>
          </>
      </div>
    </div>
  );
};

export default SessionModal;