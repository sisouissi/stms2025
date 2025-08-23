import React, { useState, useMemo, useEffect } from 'react';
import type { Tab } from '../App';
import Footer from '../components/layout/Footer';
import CountdownDisplay from '../components/ui/CountdownDisplay';
import SearchResults from '../components/home/SearchResults';
import { SESSIONS_DATA } from '../constants';
import type { Session } from '../types';
import { Search, Download, Calendar, MapPin, Mail, FileText, Edit, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../context/PWAInstallContext';
import LiveSessions from '../components/home/LiveSessions';
import DailyBriefing from '../components/home/DailyBriefing';

interface HomePageProps {
  setActiveTab: (tab: Tab) => void;
  onSessionSelect: (session: Session) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onSessionSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { canInstall, install } = usePWAInstall();
    const [liveSessions, setLiveSessions] = useState<{ current: Session[]; next: Session | null }>({ current: [], next: null });

    useEffect(() => {
        const sortedSessions = [...SESSIONS_DATA].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
        
        const updateLiveSessions = () => {
            const now = new Date();
            
            const current = sortedSessions.filter(session => now >= session.startTime && now < session.endTime);
            let next: Session | null = null;

            if (current.length > 0) {
                const maxEndTime = new Date(Math.max(...current.map(s => s.endTime.getTime())));
                next = sortedSessions.find(session => session.startTime >= maxEndTime) || null;
            } else {
                 next = sortedSessions.find(session => session.startTime > now) || null;
            }
            
            setLiveSessions({ current, next });
        };

        updateLiveSessions();
        const intervalId = setInterval(updateLiveSessions, 30000); 

        return () => clearInterval(intervalId);
    }, []);

    const filteredSessions = useMemo(() => {
        if (!searchQuery) return [];
        const query = searchQuery.toLowerCase();
        return SESSIONS_DATA.filter(session => {
            const matchesTitle = session.title.toLowerCase().includes(query);
            const matchesTheme = session.theme.toLowerCase().includes(query);
            const matchesType = session.type.toLowerCase().includes(query);
            const matchesSpeaker = session.speakers.some(s => s.name.toLowerCase().includes(query) || (s.role && s.role.toLowerCase().includes(query)));
            return matchesTitle || matchesTheme || matchesType || matchesSpeaker;
        });
    }, [searchQuery]);

    const handleSessionClick = (session: Session) => {
        onSessionSelect(session);
    };

    return (
    <>
      <div className="relative bg-gradient-to-b from-white to-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8 lg:max-w-3xl lg:mx-auto">
              
              <DailyBriefing />

              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tighter">
                  8<sup>ème</sup> Congrès de Médecine du Sommeil
                </h1>
                <p className="text-lg text-slate-600">9 - 11 Octobre 2025 | Hôtel LE ROYAL, Hammamet</p>
              </div>

              <div className="relative">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Rechercher une session, un orateur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-lg pl-14 pr-6 py-4 rounded-full bg-white focus:outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-slate-50 shadow-[0_4px_30px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_40px_rgba(0,0,0,0.1)] focus:shadow-[0_6px_40px_rgba(0,0,0,0.1)]"
                />
              </div>

              {searchQuery && <SearchResults sessions={filteredSessions} onSessionClick={handleSessionClick} />}

              <CountdownDisplay />

              <LiveSessions 
                currentSessions={liveSessions.current} 
                nextSession={liveSessions.next}
                onSessionClick={handleSessionClick}
              />

              <div className="space-y-4">
                <button
                    onClick={() => setActiveTab('programme')}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                    <Calendar size={20} />
                    <span className="font-semibold">Programme Complet</span>
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a
                        href="https://activevents.com.tn/?mayor=inscription_srms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-[#033238] px-6 py-3.5 rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        <Edit size={20} />
                        <span className="font-semibold">S'inscrire</span>
                    </a>
                    <button
                        onClick={() => setActiveTab('submission')}
                        className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-[#033238] px-6 py-3.5 rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        <FileText size={20} />
                        <span className="font-semibold">Soumettre</span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1XICEmcJsujhO5jps942V1Rx90tYe3F5m/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-[#033238] px-6 py-3.5 rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                        <Download size={20} />
                        <span className="font-semibold">Télécharger le Programme</span>
                    </a>
                </div>
                {canInstall && (
                  <button
                    onClick={install}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-teal-500 to-sky-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download size={20} />
                    <span className="font-semibold">Installer l'application</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Informations Clés</h2>
                    <ul className="space-y-5">
                        <li className="flex items-start">
                            <div className="bg-slate-100 p-3 rounded-full mr-4">
                                <Calendar className="w-6 h-6 text-[#033238]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Dates du Congrès</h3>
                                <p className="text-slate-600">9 - 11 Octobre 2025</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-slate-100 p-3 rounded-full mr-4">
                                <MapPin className="w-6 h-6 text-[#033238]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Lieu</h3>
                                <p className="text-slate-600">Hôtel LE ROYAL, Hammamet</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact & Liens</h2>
                    <ul className="space-y-5">
                        <li className="flex items-start">
                            <div className="bg-slate-100 p-3 rounded-full mr-4">
                                <Mail className="w-6 h-6 text-[#033238]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Email</h3>
                                <a href="mailto:contact@stms.org.tn" className="text-slate-600 hover:text-[#033238] transition-colors">contact@stms.org.tn</a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-slate-100 p-3 rounded-full mr-4">
                                <CheckCircle2 className="w-6 h-6 text-[#033238]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Site Web</h3>
                                <a href="https://stms.org.tn" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#033238] transition-colors">stms.org.tn</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;