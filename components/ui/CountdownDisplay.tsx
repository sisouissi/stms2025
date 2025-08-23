import React from 'react';
import useCountdown from '../../hooks/useCountdown';

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/70 backdrop-blur-sm rounded-full border-2 border-white shadow-xl text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#033238] tracking-tight">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
);

const CountdownDisplay: React.FC = () => {
    const targetDate = new Date('2025-10-09T08:00:00');
    const timeLeft = useCountdown(targetDate);

    return (
        <div className="flex justify-center items-center gap-3 md:gap-6">
            <CountdownItem value={timeLeft.days} label="Jours" />
            <CountdownItem value={timeLeft.hours} label="Heures" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Secondes" />
        </div>
    );
};

export default CountdownDisplay;