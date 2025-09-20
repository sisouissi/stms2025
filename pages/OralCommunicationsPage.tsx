import React, { useState, useMemo, useEffect } from 'react';
import type { Tab } from '../App';
import { ORAL_COMMUNICATIONS_DATA } from '../constants';
import type { Poster } from '../types';
import { Search, User, Building, Mic } from 'lucide-react';
import CommunicationModal from '../components/communications/CommunicationModal';

interface OralCommunicationsPageProps {
  setActiveTab: (tab: Tab) => void;
}

const CommunicationCard: React.FC<{ communication: Poster; onClick: () => void }> = ({ communication, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#68A0A8] focus:ring-offset-2"
    >
      <h3 className="font-bold text-lg text-[#033238] mb-3">{communication.title}</h3>
      
      {communication.summary && (
        <p className="text-sm text-slate-600 mb-4 line-clamp-4">
          {communication.summary}
        </p>
      )}

      <div className="space-y-3 text-sm text-slate-600 mt-auto pt-3 border-t border-slate-100">
        <div className="flex items-start">
          <User size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
          <span>{communication.authors}</span>
        </div>
        <div className="flex items-start">
          <Building size={14} className="mr-2.5 text-slate-400 flex-shrink-0 mt-0.5" />
          <span>{communication.affiliation}</span>
        </div>
      </div>
    </button>
  );
};

const OralCommunicationsPage: React.FC<OralCommunicationsPageProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommunication, setSelectedCommunication] = useState<Poster | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = useMemo(() => {
    const data = ORAL_COMMUNICATIONS_DATA;
    if (!searchQuery) {
      return data;
    }
    const query = searchQuery.toLowerCase();
    return data.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.authors.toLowerCase().includes(query) ||
      item.affiliation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const pageTitle = 'Communications Orales';

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-6">{pageTitle}</h1>

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

          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map(item => (
                <CommunicationCard key={item.id} communication={item} onClick={() => setSelectedCommunication(item)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
              <Mic className="w-20 h-20 text-slate-300 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-slate-900 mb-2">Aucun résultat trouvé</h3>
              <p className="text-slate-500">Essayez une autre recherche.</p>
            </div>
          )}
        </main>
      </div>

      {selectedCommunication && (
        <CommunicationModal
          poster={selectedCommunication}
          onClose={() => setSelectedCommunication(null)}
        />
      )}
    </>
  );
};

export default OralCommunicationsPage;