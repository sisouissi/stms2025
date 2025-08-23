import React from 'react';
import type { Tab } from '../App';
import { ExternalLink, Calendar, Info, FileText } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';

interface SubmissionPageProps {
  setActiveTab: (tab: Tab) => void;
}

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="bg-slate-100 rounded-lg p-3 text-center w-24">
      <div className="text-3xl font-bold text-[#033238] tracking-tight">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
);

const SubmissionCountdown: React.FC = () => {
    const targetDate = new Date('2025-09-07T23:59:59');
    const timeLeft = useCountdown(targetDate);

    return (
        <div className="flex justify-center gap-3 md:gap-4 my-6">
            <CountdownItem value={timeLeft.days} label="Jours" />
            <CountdownItem value={timeLeft.hours} label="Heures" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Secondes" />
        </div>
    );
};


const SubmissionPage: React.FC<SubmissionPageProps> = ({ setActiveTab }) => {
  const jotformUrl = "https://form.jotform.com/241276565823563";

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8">Soumission des Travaux</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center h-full flex flex-col justify-center">
              <FileText className="w-12 h-12 text-[#033238] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Soumettez votre abstract</h2>
              <p className="text-slate-600 max-w-xl mx-auto mb-4">
                La soumission des travaux scientifiques (Communications orales, communications affichées, protocoles de recherche) se fait exclusively en ligne via la plateforme JotForm.
              </p>
               <div className="flex justify-center mb-6">
                  <a 
                    href={jotformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    <ExternalLink size={20} />
                    Accéder à la plateforme de soumission
                </a>
               </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
             <Calendar className="w-12 h-12 text-rose-500 mx-auto mb-4" />
             <h3 className="text-xl font-semibold text-slate-800 mb-2">Date limite de soumission</h3>
             <p className="text-slate-600 text-lg font-medium mb-2">07 Septembre 2025 à minuit</p>
             <p className="text-slate-500 text-sm mb-4">Temps restant :</p>
             <SubmissionCountdown />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmissionPage;