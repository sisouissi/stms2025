import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './pages/HomePage';
import ProgrammePage from './pages/ProgrammePage';
import AgendaPage from './pages/AgendaPage';
import SpeakersPage from './pages/SpeakersPage';
import InfoPage from './pages/InfoPage';
import ScientificCommitteePage from './pages/ScientificCommitteePage';
import MobileNavBar from './components/layout/MobileNavBar';
import Header from './components/layout/Header';
import { AgendaProvider, useAgenda } from './context/AgendaContext';
import type { Session } from './types';
import SessionModal from './components/programme/SessionModal';
import { useLiveStreamStatus } from './hooks/useLiveStreamStatus';
import LiveStreamPage from './pages/LiveStreamPage';
import ModeratorPage from './pages/ModeratorPage';
import AuthModal from './components/auth/AuthModal';

export type Tab = 'home' | 'programme' | 'agenda' | 'speakers' | 'info' | 'committee' | 'livestream';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [searchSelectedSessionId, setSearchSelectedSessionId] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showModeratorPage, setShowModeratorPage] = useState(false);

  const { 
    activeSession, 
    hideSessionModal 
  } = useAgenda();
  const isLive = useLiveStreamStatus();
  
  const handleSessionSearchSelect = (session: Session) => {
    setSearchSelectedSessionId(session.id);
    setActiveTab('programme');
  };

  useEffect(() => {
    if (!isLive && activeTab === 'livestream') {
      setActiveTab('home');
    }
  }, [isLive, activeTab]);

  const clearSearchSelection = useCallback(() => {
    setSearchSelectedSessionId(null);
  }, []);
  
  const handleModerationSuccess = () => {
    setShowAuthModal(false);
    setShowModeratorPage(true);
  };

  const handleExitModeration = () => {
    setShowModeratorPage(false);
    setActiveTab('home');
  };

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
      case 'info':
        return <InfoPage setActiveTab={setActiveTab} />;
      case 'livestream':
        return <LiveStreamPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} onSessionSelect={handleSessionSearchSelect} />;
    }
  };

  if (showModeratorPage) {
    return <ModeratorPage onExit={handleExitModeration} />;
  }
  
  return (
    <div className="font-sans pb-24 md:pb-0">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} isLive={isLive} onModerationClick={() => setShowAuthModal(true)} />
      {renderContent()}
      <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} isLive={isLive} onModerationClick={() => setShowAuthModal(true)} />
      {activeSession && (
        <SessionModal 
          session={activeSession} 
          onClose={hideSessionModal} 
        />
      )}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleModerationSuccess}
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