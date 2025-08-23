import React, { useState, useEffect } from 'react';
import { useAgenda } from '../../context/AgendaContext';
import { Sparkles, X, Loader } from 'lucide-react';
import type { Session } from '../../types';

const DailyBriefing: React.FC = () => {
  const { personalAgenda } = useAgenda();
  const [briefing, setBriefing] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const lastBriefingDate = localStorage.getItem('lastBriefingDate');
    const todayStr = new Date().toDateString();

    if (lastBriefingDate === todayStr) {
      return; // Briefing already shown or dismissed today
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todaysAgenda = personalAgenda.filter(session => {
      const sessionDate = new Date(session.startTime);
      sessionDate.setHours(0, 0, 0, 0);
      return sessionDate.getTime() === today.getTime();
    });

    if (todaysAgenda.length > 0) {
      generateBriefing(todaysAgenda);
    }
  }, [personalAgenda]);

  const generateBriefing = async (agendaForToday: Session[]) => {
    setIsLoading(true);
    setIsVisible(true);
    try {
      const payloadData = agendaForToday.map(s => ({
        title: s.title,
        startTime: s.startTime.toISOString()
      }));

      const response = await fetch('./api/groq-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'briefing',
          payload: { agenda: payloadData }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate briefing.');
      }
      
      const data = await response.json();
      setBriefing(data.result);
    } catch (error) {
      console.error(error);
      // Don't show the component if there's an error
      setIsVisible(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('lastBriefingDate', new Date().toDateString());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-2xl relative animate-fade-in-up border-2 border-slate-700">
      <button 
        onClick={handleDismiss} 
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        aria-label="Fermer le briefing"
      >
        <X size={20} />
      </button>
      <div className="flex items-start gap-4">
        <Sparkles className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-bold mb-2">Votre briefing du jour</h2>
          {isLoading ? (
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
            </div>
          ) : (
            <p className="text-slate-200 leading-relaxed">{briefing}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyBriefing;
