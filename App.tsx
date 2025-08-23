

import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './pages/HomePage';
import ProgrammePage from './pages/ProgrammePage';
import AgendaPage from './pages/AgendaPage';
import SpeakersPage from './pages/SpeakersPage';
import InfoPage from './pages/InfoPage';
import SubmissionPage from './pages/SubmissionPage';
import ScientificCommitteePage from './pages/ScientificCommitteePage';
import MobileNavBar from './components/layout/MobileNavBar';
import Header from './components/layout/Header';
import { AgendaProvider, useAgenda } from './context/AgendaContext';
import type { Session } from './types';
import SessionModal from './components/programme/SessionModal';

export type Tab = 'home' | 'programme' | 'agenda' | 'speakers' | 'info' | 'submission' | 'committee';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [searchSelectedSessionId, setSearchSelectedSessionId] = useState<string | null>(null);
  const { 
    showSessionModal, 
    activeSession, 
    hideSessionModal 
  } = useAgenda();
  
  const handleSessionSearchSelect = (session: Session) => {
    setSearchSelectedSessionId(session.id);
    setActiveTab('programme');
  };

  const clearSearchSelection = useCallback(() => {
    setSearchSelectedSessionId(null);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} onSessionSelect={handleSessionSearchSelect} />;
      case 'programme':
        return <ProgrammePage setActiveTab={setActiveTab} searchSelectedSessionId={searchSelectedSessionId} clearSearchSelection={clearSearchSelection} />;
      case 'agenda':
        return <AgendaPage setActiveTab={setActiveTab} />;
      case 'speakers':
        return <SpeakersPage setActiveTab={setActiveTab} />;
      case 'committee':
        return <ScientificCommitteePage setActiveTab={setActiveTab} />;
      case 'submission':
        return <SubmissionPage setActiveTab={setActiveTab} />;
      case 'info':
        return <InfoPage setActiveTab={setActiveTab} />;
      default:
        return <HomePage setActiveTab={setActiveTab} onSessionSelect={handleSessionSearchSelect} />;
    }
  };
  
  return (
    <div className="font-sans pb-24 md:pb-0">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeSession && (
        <SessionModal 
          session={activeSession} 
          onClose={hideSessionModal} 
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AgendaProvider>
      <AppContent />
    </AgendaProvider>
  );
};

export default App;