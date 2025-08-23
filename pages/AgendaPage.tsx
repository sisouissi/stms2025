import React, { useState, useMemo } from 'react';
import type { Tab } from '../App';
import { useAgenda } from '../context/AgendaContext';
import { getThemeColor } from '../constants';
import { CalendarX2, Trash2, Layers, BarChart, Clock, Download } from 'lucide-react';
import type { Session } from '../types';

interface AgendaPageProps {
  setActiveTab: (tab: Tab) => void;
}

const AgendaPage: React.FC<AgendaPageProps> = ({ setActiveTab }) => {
  const [showExportModal, setShowExportModal] = useState(false);
  const { personalAgenda, removeFromAgenda } = useAgenda();

  const sortedAgenda = useMemo(() => {
    return [...personalAgenda].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  }, [personalAgenda]);
  
  const stats = useMemo(() => {
    const totalDurationMinutes = personalAgenda.reduce((acc, session) => acc + (session.endTime.getTime() - session.startTime.getTime()) / (1000 * 60), 0);
    const hours = Math.floor(totalDurationMinutes / 60);
    const minutes = Math.round(totalDurationMinutes % 60);
    return {
        count: personalAgenda.length,
        themes: new Set(personalAgenda.map(s => s.theme)).size,
        duration: `${hours}h ${minutes}m`
    };
  }, [personalAgenda]);

  const handlePdfExport = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write('<html><head><title>Mon Agenda - CNP 2025</title>');
        printWindow.document.write(`
            <style>
                body { font-family: sans-serif; margin: 2rem; color: #333; }
                h1 { color: #033238; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }
                .session { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; page-break-inside: avoid; }
                .session h2 { margin: 0 0 0.5rem 0; font-size: 1.2rem; color: #111; }
                .session p { margin: 0.25rem 0; color: #555; }
                strong { color: #333; }
            </style>
        `);
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Mon Agenda - CNP 2025</h1>');

        sortedAgenda.forEach(session => {
            const time = `${session.startTime.toLocaleDateString('fr-FR', {weekday: 'long', day: 'numeric'})}, ${session.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${session.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
            printWindow.document.write('<div class="session">');
            printWindow.document.write(`<h2>${session.title}</h2>`);
            printWindow.document.write(`<p><strong>Date & Heure:</strong> ${time}</p>`);
            printWindow.document.write(`<p><strong>Lieu:</strong> ${session.location}</p>`);
            printWindow.document.write('</div>');
        });

        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    }
    setShowExportModal(false);
  };

  const handleIcalExport = () => {
    if (sortedAgenda.length === 0) return;

    const formatIcsDate = (date: Date): string => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//STMRA//CNP 2025 App//FR',
        'CALSCALE:GREGORIAN',
    ];

    sortedAgenda.forEach((session: Session) => {
        const description = `Orateurs: ${session.speakers.map(s => s.name).join(', ') || 'N/A'}\\nThème: ${session.theme}\\nType: ${session.type}`;
        const event = [
            'BEGIN:VEVENT',
            `DTSTAMP:${formatIcsDate(new Date())}`,
            `UID:${session.id}@cnp2025.stmra.org`,
            `DTSTART:${formatIcsDate(session.startTime)}`,
            `DTEND:${formatIcsDate(session.endTime)}`,
            `SUMMARY:${session.title}`,
            `LOCATION:${session.location}`,
            `DESCRIPTION:${description}`,
            'END:VEVENT'
        ];
        icsContent.push(...event);
    });

    icsContent.push('END:VCALENDAR');

    const icsFileContent = icsContent.join('\r\n');
    const blob = new Blob([icsFileContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mon-agenda-cnp2025.ics');
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setShowExportModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tighter">Mon Agenda</h1>
            <button onClick={() => setShowExportModal(true)} className="flex items-center gap-2 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-4 py-2.5 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg">
                <Download size={16}/>
                Exporter
            </button>
        </div>

        {personalAgenda.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
            <CalendarX2 className="w-20 h-20 text-slate-300 mx-auto mb-6" />
            <h3 className="text-xl font-medium text-slate-900 mb-2">Votre agenda est vide</h3>
            <p className="text-slate-500 mb-6">Ajoutez des sessions à votre agenda depuis le programme.</p>
            <button onClick={() => setActiveTab('programme')} className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg">
                Explorer le programme
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {sortedAgenda.map(session => (
                <div key={session.id} className={`p-5 rounded-xl bg-white border-l-4 shadow-md ${getThemeColor(session.theme).replace('bg-','border-')}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <span className="font-bold text-slate-800 text-lg">{session.title}</span>
                       <div className="text-sm text-slate-500 mt-2">
                        {session.startTime.toLocaleDateString('fr-FR', {weekday: 'long', day: 'numeric'})}, {session.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {session.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">{session.location}</div>
                    </div>
                    <button onClick={() => removeFromAgenda(session.id)} className="text-slate-400 hover:text-rose-600 p-2 rounded-full hover:bg-rose-50 transition-colors flex-shrink-0">
                      <Trash2 size={20} />
                    </button>
                  </div>
                 
                </div>
              ))}
            </div>
            <div className="lg:sticky top-24 self-start">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Statistiques</h2>
                <div className="space-y-5">
                    <div className="flex items-center gap-4"><BarChart className="w-8 h-8 text-[#033238] bg-slate-100 p-1.5 rounded-md"/><div><div className="text-sm text-slate-600">Sessions ajoutées</div><div className="text-2xl font-bold text-slate-800">{stats.count}</div></div></div>
                    <div className="flex items-center gap-4"><Layers className="w-8 h-8 text-[#033238] bg-slate-100 p-1.5 rounded-md"/><div><div className="text-sm text-slate-600">Thèmes suivis</div><div className="text-2xl font-bold text-slate-800">{stats.themes}</div></div></div>
                    <div className="flex items-center gap-4"><Clock className="w-8 h-8 text-[#033238] bg-slate-100 p-1.5 rounded-md"/><div><div className="text-sm text-slate-600">Durée totale</div><div className="text-2xl font-bold text-slate-800">{stats.duration}</div></div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in" onClick={() => setShowExportModal(false)}>
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Exporter votre agenda</h3>
            <p className="text-sm text-slate-500 mb-6">Choisissez un format pour exporter votre agenda personnel.</p>
            <div className="space-y-3">
              <button onClick={handlePdfExport} className="w-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">Exporter en PDF</button>
              <button onClick={handleIcalExport} className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 transition-colors font-semibold">Exporter en iCal</button>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">Le format iCal est compatible avec Google Calendar, Apple Calendar, Outlook, etc.</p>
            <button onClick={() => setShowExportModal(false)} className="mt-6 w-full text-slate-600 hover:text-slate-800 py-2 rounded-lg">Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaPage;