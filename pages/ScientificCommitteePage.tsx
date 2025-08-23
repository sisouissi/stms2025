
import React from 'react';
import type { Tab } from '../App';
import { ORGANIZING_COMMITTEE_DATA, SCIENTIFIC_COMMITTEE_DATA, CommitteeMember } from '../constants';
import { Award, Users } from 'lucide-react';

interface ScientificCommitteePageProps {
  setActiveTab: (tab: Tab) => void;
}

const CommitteeSection: React.FC<{
    title: string;
    membersData: CommitteeMember[];
}> = ({ title, membersData }) => {
    const president = membersData.find(m => m.role === 'Présidente');
    const members = membersData.filter(m => m.role === 'Membre').sort((a, b) => a.name.localeCompare(b.name));

    if (membersData.length === 0) {
        return null;
    }
    
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tighter mb-6">{title}</h2>
            {president && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#033238] mb-4 border-b-2 border-[#033238]/20 pb-2">Présidente</h3>
                <div className="inline-block">
                    <div className="bg-gradient-to-br from-[#033238] to-[#054c55] text-white rounded-xl shadow-xl p-6 flex items-center space-x-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-2xl font-medium text-white flex-shrink-0">
                            {president.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">{president.name}</h3>
                            <div className="flex items-center text-sm opacity-80 mt-1">
                                <Award size={16} className="mr-1.5" />
                                <span>{president.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}
            {members.length > 0 && (
                <>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2">Membres</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {members.map((member) => (
                        <div 
                            key={member.name} 
                            className="bg-white rounded-xl shadow-md border border-slate-200/80 p-5"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-lg font-medium text-white flex-shrink-0">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800">{member.name}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </>
            )}
        </section>
    );
};

const ScientificCommitteePage: React.FC<ScientificCommitteePageProps> = ({ setActiveTab }) => {
  const hasData = ORGANIZING_COMMITTEE_DATA.length > 0 || SCIENTIFIC_COMMITTEE_DATA.length > 0;

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8">Comités du Congrès</h1>

        {hasData ? (
          <>
            <CommitteeSection title="Comité d'organisation" membersData={ORGANIZING_COMMITTEE_DATA} />
            <CommitteeSection title="Comité Scientifique" membersData={SCIENTIFIC_COMMITTEE_DATA} />
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
            <Users className="w-20 h-20 text-slate-300 mx-auto mb-6" />
            <h3 className="text-xl font-medium text-slate-900 mb-2">Informations à venir</h3>
            <p className="text-slate-500">La liste des membres des comités sera bientôt disponible.</p>
          </div>
        )}

      </main>
    </div>
  );
};

export default ScientificCommitteePage;
