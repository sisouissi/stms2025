import React from 'react';
import type { Tab } from '../../App';
import { Home, CalendarDays, CalendarCheck, Users, Info, Youtube, Shield } from 'lucide-react';

interface MobileNavBarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isLive: boolean;
  onModerationClick: () => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  itemKey: Tab | 'moderation';
}> = ({ label, icon, isActive, onClick, itemKey }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-3 pb-2 transition-colors duration-200 relative ${
      isActive 
        ? (itemKey === 'livestream' ? 'text-rose-500' : 'text-[#033238]') 
        : 'text-slate-500 hover:text-[#033238]'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {isActive && <div className={`absolute top-0 h-1 w-8 rounded-full ${itemKey === 'livestream' ? 'bg-rose-500' : 'bg-[#033238]'}`}></div>}
    {itemKey === 'livestream' && (
      <span className="absolute top-2 right-1/2 translate-x-4 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
      </span>
    )}
    {icon}
    <span className={`text-xs mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </button>
);

const MobileNavBar: React.FC<MobileNavBarProps> = ({ activeTab, setActiveTab, isLive, onModerationClick }) => {
  const baseNavItems = [
    { key: 'home', label: 'Accueil', icon: <Home size={22} /> },
    { key: 'programme', label: 'Programme', icon: <CalendarDays size={22} /> },
    { key: 'agenda', label: 'Agenda', icon: <CalendarCheck size={22} /> },
    { key: 'speakers', label: 'Orateurs', icon: <Users size={22} /> },
    { key: 'info', label: 'Infos', icon: <Info size={22} /> },
  ];

  let navItems = [...baseNavItems];
  if (isLive) {
    navItems.splice(2, 0, { key: 'livestream', label: 'Direct', icon: <Youtube size={22} /> });
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] flex items-center justify-around z-50">
      {navItems.map((item) => (
        <NavItem
          key={item.key}
          label={item.label}
          icon={item.icon}
          isActive={activeTab === item.key}
          onClick={() => setActiveTab(item.key as Tab)}
          itemKey={item.key as Tab}
        />
      ))}
      <button
        onClick={onModerationClick}
        className="flex flex-col items-center justify-center w-full pt-3 pb-2 transition-colors duration-200 text-slate-500 hover:text-[#033238]"
        aria-label="Accéder à la modération"
      >
        <Shield size={22} />
        <span className="text-xs mt-1 font-medium">Modération</span>
      </button>
    </nav>
  );
};

export default MobileNavBar;