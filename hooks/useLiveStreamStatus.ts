import { useState, useEffect } from 'react';

const liveStreamTimes = [
  // --- DATES ORIGINALES DU CONGRÈS ---
  // Vendredi 10 octobre 2025 de 10h45 à 18h45
  // { start: new Date('2025-10-10T10:45:00'), end: new Date('2025-10-10T18:45:00') },
  // Samedi 11 octobre 2025 de 8h30 à 14h00
  // { start: new Date('2025-10-11T08:30:00'), end: new Date('2025-10-11T14:00:00') }

  // --- PÉRIODE DE TEST ACTIVÉE ---
  // Le direct est activé en permanence pour les tests.
  // Pensez à commenter cette ligne et décommenter les dates originales avant l'événement.
  { start: new Date('2024-01-01T00:00:00'), end: new Date('2025-12-31T23:59:59') }
];

export const useLiveStreamStatus = (): boolean => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const isCurrentlyLive = liveStreamTimes.some(period => now >= period.start && now <= period.end);
      setIsLive(isCurrentlyLive);
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return isLive;
};
