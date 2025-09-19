import React, { useState, useEffect } from 'react';
import type { Tab } from '../../App';
import { Shield } from 'lucide-react';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isLive: boolean;
  onModerationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, isLive, onModerationClick }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      
      const datePart = new Intl.DateTimeFormat('fr-FR', options)
        .format(now)
        .replace(/\b\w/g, char => char.toUpperCase());
        
      const timePart = now.toLocaleTimeString('fr-FR', {
        hour: 'numeric',
        minute: '2-digit'
      }).replace(':', 'h');

      setCurrentDateTime(`${datePart} : ${timePart}`);
    };

    updateDateTime();
    const timerId = setInterval(updateDateTime, 60000); // Mettre à jour chaque minute

    return () => clearInterval(timerId);
  }, []);

  const baseNavItems: { key: Tab; label: string }[] = [
    { key: 'home', label: 'Accueil' },
    { key: 'programme', label: 'Programme' },
    { key: 'agenda', label: 'Mon Agenda' },
    { key: 'speakers', label: 'Orateurs' },
    { key: 'committee', label: 'Comités' },
    { key: 'info', label: 'Infos' },
  ];
  
  const navItems = [...baseNavItems];
  if (isLive) {
    navItems.splice(1, 0, { key: 'livestream', label: 'Direct' });
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-md font-bold text-slate-800">{currentDateTime}</div>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.key
                    ? 'bg-slate-100 text-[#033238] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
                 {item.key === 'livestream' && (
                  <span className="absolute top-1 right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={onModerationClick}
              className="flex items-center gap-2 ml-2 pl-3 pr-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 border border-slate-200"
              aria-label="Accéder à la modération"
            >
              <Shield size={16} />
              <span>Modération</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;