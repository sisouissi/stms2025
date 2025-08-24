import React, { useState } from 'react';
import type { Session } from '../../types';
import { X, Send, Loader, CheckCircle } from 'lucide-react';

interface QuestionModalProps {
  session: Session;
  onClose: () => void;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const QuestionModal: React.FC<QuestionModalProps> = ({ session, onClose }) => {
    const [questionText, setQuestionText] = useState('');
    const [status, setStatus] = useState<SubmissionStatus>('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!questionText.trim()) return;

        setStatus('loading');
        setError('');

        try {
            const response = await fetch('./api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'addQuestion',
                    sessionId: session.id,
                    text: questionText,
                }),
            });

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.error || 'Une erreur est survenue lors de l\'envoi.');
            }

            setStatus('success');
            setQuestionText('');
            setTimeout(() => {
                onClose();
            }, 2000);

        } catch (err) {
            setStatus('error');
            setError(err instanceof Error ? err.message : 'Impossible de se connecter au serveur.');
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900">Poser une question</h2>
                    <p className="text-sm text-slate-500 mt-1">Pour la session : "{session.title}"</p>
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 -m-2 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} />
                    </button>
                </div>
                
                {status === 'success' ? (
                    <div className="p-12 text-center flex flex-col items-center justify-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <h3 className="text-lg font-semibold text-slate-800">Question envoyée !</h3>
                        <p className="text-slate-500 mt-1">Merci pour votre participation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="p-6">
                            <label htmlFor="question-textarea" className="sr-only">Votre question</label>
                            <textarea
                                id="question-textarea"
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                                placeholder="Saisissez votre question ici..."
                                className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                                disabled={status === 'loading'}
                                required
                            />
                            {status === 'error' && (
                                <p className="text-sm text-rose-600 mt-2">{error}</p>
                            )}
                        </div>
                        <div className="px-6 pb-6">
                            <button
                                type="submit"
                                disabled={status === 'loading' || !questionText.trim()}
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader className="animate-spin" size={20} />
                                        <span>Envoi...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Envoyer ma question</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuestionModal;