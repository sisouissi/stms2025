import React, { useState, useEffect } from 'react';
import type { Session } from '../../types';
import { getThemeColor } from '../../constants';
import { ArrowRight, Clock, MapPin, Shield, Calendar } from 'lucide-react';
import SessionCountdown from './SessionCountdown';

interface LiveSessionCardProps {
    session: Session;
    type: 'current' | 'next';
    onSessionClick: (session: Session) => void;
}

const LiveSessionCard: React.FC<LiveSessionCardProps> = ({ session, type, onSessionClick }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (type !== 'current') return;

        const updateProgress = () => {
            const now = new Date().getTime();
            const start = session.startTime.getTime();
            const end = session.endTime.getTime();
            const duration = end - start;
            const elapsed = now - start;
            const calculatedProgress = Math.max(0, Math.min(100, (elapsed / duration) * 100));
            setProgress(calculatedProgress);
        };

        updateProgress();
        const interval = setInterval(updateProgress, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [session, type]);

    const isCurrent = type === 'current';

    return (
        <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full transition-shadow duration-300 ${isCurrent ? 'animate-glow' : ''}`}>
            <div className={`p-4 ${getThemeColor(session.theme)} text-white`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         {isCurrent ? (
                            <div className="flex items-center gap-2 font-bold bg-rose-500 text-white px-4 py-1.5 rounded-full text-sm shadow-lg">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </div>
                                En Direct
                            </div>
                        ) : (
                            <h2 className="text-lg font-bold">Prochaine Séance</h2>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900">{session.title}</h3>
                <div className="text-sm text-slate-500 mt-3 space-y-2 flex-grow">
                    {isCurrent ? (
                        null
                    ) : (
                         <p className="flex items-center gap-2 font-semibold text-slate-700">
                            <Calendar size={14} className="text-slate-400" />
                            <span>
                                {session.startTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                                {' à '}
                                {session.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </p>
                    )}
                    <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" />
                        <span>{session.location}</span>
                    </p>
                </div>
                
                {isCurrent ? (
                    <>
                        <SessionCountdown targetDate={session.endTime} prefix="Se termine dans" displayMode="inline" />
                        <div className="mt-4">
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </>
                ) : (
                    null
                )}
                
                <div className="mt-6">
                    <button
                        onClick={() => onSessionClick(session)}
                        className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-sm"
                    >
                        Voir les détails <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

interface LiveSessionsProps {
    currentSessions: Session[];
    nextSession: Session | null;
    onSessionClick: (session: Session) => void;
}

const LiveSessions: React.FC<LiveSessionsProps> = ({ currentSessions, nextSession, onSessionClick }) => {
    const hasCurrent = currentSessions && currentSessions.length > 0;

    const renderableItems: JSX.Element[] = [];

    if (hasCurrent) {
        currentSessions.forEach(session => {
            renderableItems.push(<LiveSessionCard key={session.id} session={session} type="current" onSessionClick={onSessionClick} />);
        });
    } else if (nextSession) {
        // Show pause block only if there's no current session but there is a next one.
        renderableItems.push(
            <div key="pause" className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex items-center justify-center h-full">
                <div className="text-center">
                    <Clock size={32} className="mx-auto text-slate-400 mb-4" />
                    <h3 className="text-xl font-bold text-slate-800">Pause</h3>
                    <p className="text-slate-500 mt-1">Aucune session en cours.</p>
                </div>
            </div>
        );
    }

    if (nextSession) {
        renderableItems.push(<LiveSessionCard key={nextSession.id} session={nextSession} type="next" onSessionClick={onSessionClick} />);
    } else if (hasCurrent) {
        // Show end of day block if there are current sessions but no more sessions are scheduled.
        renderableItems.push(
             <div key="end-of-day" className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex items-center justify-center h-full">
                <div className="text-center">
                     <Clock size={32} className="mx-auto text-slate-400 mb-4" />
                    <h3 className="text-xl font-bold text-slate-800">Fin de la journée</h3>
                    <p className="text-slate-500 mt-1">Plus de sessions programmées.</p>
                </div>
            </div>
        );
    }
    
    if (renderableItems.length === 0) {
        return null;
    }

    const gridColsClass = renderableItems.length >= 3 
        ? 'lg:grid-cols-3' 
        : (renderableItems.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1');
    
    const wrapperClass = `grid grid-cols-1 ${gridColsClass} gap-8 ${renderableItems.length === 1 ? 'lg:max-w-lg mx-auto' : ''}`;

    return (
        <section className="animate-fade-in-up">
            <div className={wrapperClass}>
                {renderableItems}
            </div>
        </section>
    );
};

export default LiveSessions;