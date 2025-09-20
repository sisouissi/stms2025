import React, { useState, useMemo } from 'react';
import type { Tab } from '../App';
import { POSTERS_DATA } from '../constants';
import type { Poster } from '../types';
import { Search, User, Building, FileText } from 'lucide-react';
import PosterModal from '../components/posters/PosterModal';

interface PostersPageProps {
  setActiveTab: (tab: Tab) => void;
}

const PosterCard: React.FC<{ poster: Poster; onClick: () => void }> = ({ poster, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#68A0A8] focus:ring-offset-2"
    >
      <h3 className="font-bold text-lg text-[#033238] mb-3">{poster.title}</h3>
      <div className="space-y-3 text-sm text-slate-600 mt-auto pt-3 border-t border-slate-100">
        <div className="flex items-start">
          <User size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
          <span>{poster.authors}</span>
        </div>
        <div className="flex items-start">
          <Building size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
          <span>{poster.affiliation}</span>
        </div>
      </div>
    </button>
  );
};

const PostersPage: React.FC<PostersPageProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const filteredPosters = useMemo(() => {
    if (!searchQuery) {
      return POSTERS_DATA;
    }
    const query = searchQuery.toLowerCase();
    return POSTERS_DATA.filter(poster =>
      poster.title.toLowerCase().includes(query) ||
      poster.authors.toLowerCase().includes(query) ||
      poster.affiliation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-6">Communications Affichées</h1>
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par titre, auteur ou affiliation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:ring-[#68A0A8] focus:border-[#68A0A8] transition-colors shadow-sm"
            />
          </div>

          {filteredPosters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosters.map(poster => (
                <PosterCard key={poster.id} poster={poster} onClick={() => setSelectedPoster(poster)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
              <FileText className="w-20 h-20 text-slate-300 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-slate-900 mb-2">Aucun poster trouvé</h3>
              <p className="text-slate-500">Essayez une autre recherche.</p>
            </div>
          )}
        </main>
      </div>

      {selectedPoster && (
        <PosterModal
          poster={selectedPoster}
          onClose={() => setSelectedPoster(null)}
        />
      )}
    </>
  );
};

export default PostersPage;