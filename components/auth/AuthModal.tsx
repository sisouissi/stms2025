import React, { useState } from 'react';
import { Key, LogIn, X } from 'lucide-react';

const MODERATOR_ACCESS_CODE = 'STMS2025_MOD';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === MODERATOR_ACCESS_CODE) {
      setError('');
      onSuccess();
    } else {
      setError('Code d\'accès incorrect.');
      setCode('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70] p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 -m-2 rounded-full hover:bg-slate-100 transition-colors" aria-label="Fermer">
          <X size={24} />
        </button>
        <div className="text-center mb-6">
          <Key className="mx-auto h-12 w-12 text-[#033238]" />
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Accès Modérateur</h1>
          <p className="text-slate-500 mt-1">Veuillez saisir le code d'accès.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-center font-semibold tracking-widest focus:ring-2 focus:ring-cyan-500"
            placeholder="••••••••"
            autoFocus
          />
          {error && <p className="text-sm text-rose-600 mt-2 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <LogIn size={18} />
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
