import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, AlertCircle, Loader, ArrowLeft, Trash2 } from 'lucide-react';

interface Question {
  id: number;
  timestamp: string;
  question: string;
  status: 'new' | 'read' | 'answered';
}

interface ModeratorPageProps {
  onExit: () => void;
}

const ModeratorPage: React.FC<ModeratorPageProps> = ({ onExit }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchQuestions = useCallback(async () => {
    // Ne pas rafraîchir si une requête est déjà en cours
    if (isLoading && questions.length > 0) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/questions?sessionId=livestream-main');
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Erreur lors de la récupération des questions.');
      }
      setQuestions(data.questions);
      setError(null); // Clear previous errors on success
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue.');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, questions.length]);

  useEffect(() => {
    fetchQuestions();
    const intervalId = setInterval(fetchQuestions, 5000); // Rafraîchissement toutes les 5 secondes
    return () => clearInterval(intervalId);
  }, [fetchQuestions]);

  const handleDelete = async (questionId: number) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette question ? Cette action est irréversible.")) {
        return;
    }

    setDeletingId(questionId);
    setError(null);

    const originalQuestions = [...questions];
    setQuestions(prevQuestions => prevQuestions.filter(q => q.id !== questionId));

    try {
        const response = await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'deleteQuestion',
                questionId: questionId,
            }),
        });

        const result = await response.json();

        if (!response.ok || result.success === false) {
            throw new Error(result.error || 'La suppression a échoué.');
        }
    } catch (err) {
        setError(err instanceof Error ? err.message : 'Impossible de se connecter au serveur.');
        setQuestions(originalQuestions);
    } finally {
        setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button onClick={onExit} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
                <ArrowLeft size={16} />
                Quitter
              </button>
              <h1 className="text-xl font-bold text-slate-900 hidden sm:block">Modération des Questions</h1>
            </div>
            <button onClick={fetchQuestions} disabled={isLoading} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              Rafraîchir
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {error && (
            <div className="bg-rose-100 text-rose-800 p-4 rounded-lg mb-6 flex items-center gap-3">
                <AlertCircle />
                <span>{error}</span>
            </div>
        )}
        <div className="space-y-4">
          {isLoading && questions.length === 0 ? (
             <div className="text-center py-20 text-slate-500">
                <Loader className="mx-auto h-12 w-12 animate-spin mb-4" />
                <p>Chargement des questions...</p>
             </div>
          ) : questions.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-medium text-slate-900 mb-2">Aucune question pour le moment</h3>
              <p className="text-slate-500">Les nouvelles questions apparaîtront ici automatiquement.</p>
            </div>
          ) : (
            questions.map((q) => (
              <div 
                key={q.id} 
                className={`bg-white rounded-lg shadow-md border border-slate-200 p-5 flex items-start justify-between gap-4 animate-fade-in-up transition-opacity duration-300 ${deletingId === q.id ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="flex-grow">
                  <p className="text-slate-800 text-lg">{q.question}</p>
                  <div className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
                    Reçue le {new Date(q.timestamp).toLocaleString('fr-FR')}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(q.id)}
                  disabled={deletingId === q.id}
                  className="text-slate-400 hover:text-rose-600 p-2 rounded-full hover:bg-rose-50 transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-wait"
                  aria-label="Supprimer la question"
                >
                  {deletingId === q.id ? <Loader size={20} className="animate-spin" /> : <Trash2 size={20} />}
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ModeratorPage;