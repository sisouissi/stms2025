import React from 'react';
import useCountdown from '../../hooks/useCountdown';

interface SessionCountdownProps {
    targetDate: Date;
    prefix: string;
    displayMode?: 'boxes' | 'inline';
}

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="text-center p-2 bg-white rounded-lg shadow-sm border border-slate-200 flex-1 min-w-0">
      <div className="text-xl font-bold text-[#033238] tracking-tight">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
    </div>
);

const SessionCountdown: React.FC<SessionCountdownProps> = ({ targetDate, prefix, displayMode = 'boxes' }) => {
    const timeLeft = useCountdown(targetDate);
    const hasTimeLeft = timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0;

    if (!hasTimeLeft) {
        return null;
    }

    if (displayMode === 'inline') {
        const totalHours = timeLeft.days * 24 + timeLeft.hours;
        const formattedTime = `${String(totalHours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`;
        
        return (
            <div className="mt-4 text-center bg-slate-100 rounded-xl p-3">
                <p className="text-sm font-semibold text-slate-700 mb-1">{prefix}</p>
                <p className="text-3xl font-bold text-[#033238] tracking-tight tabular-nums">{formattedTime}</p>
            </div>
        );
    }
    
    const items = [];
    if (timeLeft.days > 0) {
        items.push(<CountdownItem key="d" value={timeLeft.days} label="Jours" />);
    }
    if (timeLeft.hours > 0 || timeLeft.days > 0) {
         items.push(<CountdownItem key="h" value={timeLeft.hours} label="Heures" />);
    }
    items.push(<CountdownItem key="m" value={timeLeft.minutes} label="Min" />);
    items.push(<CountdownItem key="s" value={timeLeft.seconds} label="Sec" />);

    return (
        <div className="mt-4 bg-slate-100 rounded-xl p-3">
            <p className="text-sm font-semibold text-slate-700 text-center mb-2">{prefix}</p>
            <div className="flex justify-center items-stretch gap-2">
                {items}
            </div>
        </div>
    );
};

export default SessionCountdown;