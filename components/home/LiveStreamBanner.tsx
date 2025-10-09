import React, { useState, useEffect } from 'react';
import { Youtube } from 'lucide-react';

interface LiveStreamBannerProps {
  onWatchLive: () => void;
}

const LiveStreamBanner: React.FC<LiveStreamBannerProps> = ({ onWatchLive }) => {
  const [isLive, setIsLive] = useState(false);

  const liveStreamTimes = [
    // Vendredi 10 octobre 2025 de 10h45 à 18h45
    { start: new Date('2025-10-10T10:45:00'), end: new Date('2025-10-10T18:45:00') },
    // Samedi 11 octobre 2025 de 10h30 à 13h30
    { start: new Date('2025-10-11T10:30:00'), end: new Date('2025-10-11T13:30:00') }
  ];

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const isCurrentlyLive = liveStreamTimes.some(period => now >= period.start && now <= period.end);
      setIsLive(isCurrentlyLive);
    };

    // Check status on mount and then every minute
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isLive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white rounded-xl shadow-lg p-5 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
          </div>
          <div>
            <h2 className="font-bold text-xl">Le congrès est en direct !</h2>
            <p className="text-sm opacity-90">Suivez les sessions plénières en temps réel.</p>
          </div>
        </div>
        <button
          onClick={onWatchLive}
          className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-white text-rose-600 font-bold px-5 py-3 rounded-lg hover:bg-rose-50 transition-colors shadow-md transform hover:scale-105"
        >
          <Youtube size={20} />
          Voir le direct
        </button>
      </div>
    </div>
  );
};

export default LiveStreamBanner;