import React from 'react';
import type { Tab } from '../App';
import { Edit, BedDouble, Banknote, Map, Phone, Mail } from 'lucide-react';

interface InfoPageProps {
  setActiveTab: (tab: Tab) => void;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
            {icon}
            <h2 className="text-3xl font-bold text-slate-900 tracking-tighter">{title}</h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex-grow">
            {children}
        </div>
    </div>
);

const InfoItem: React.FC<{ label: string; value: string; isLink?: boolean; type?: 'tel' | 'mailto' }> = ({ label, value, isLink, type }) => (
    <div>
        <h3 className="font-semibold text-slate-900 mb-1">{label}</h3>
        {isLink ? (
            <a href={`${type}:${value}`} className="text-slate-600 hover:text-[#033238] transition-colors break-all">{value}</a>
        ) : (
            <p className="text-slate-600 break-all">{value}</p>
        )}
    </div>
);


const InfoPage: React.FC<InfoPageProps> = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8">Informations Pratiques</h1>
        
        <div className="bg-sky-800/90 text-white rounded-xl shadow-lg p-6 mb-8">
             <h2 className="text-2xl font-bold mb-2">Inscription au Congrès</h2>
             <p className="opacity-90 mb-4">L'inscription est obligatoire pour tous les participants et donne accès à toutes les sessions, pauses, déjeuner et dîner du Vendredi 10 Octobre.</p>
             <a 
                href="https://activevents.com.tn/?mayor=inscription_srms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
                <Edit size={18}/>
                S'inscrire en ligne
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
                <InfoCard title="Frais d'Inscription" icon={<Banknote className="w-8 h-8 text-slate-400"/>}>
                    <ul className="space-y-4 divide-y divide-slate-100">
                        <li className="pt-4 first:pt-0"><strong className="text-lg text-slate-800">300 DT</strong> pour la journée de formation</li>
                        <li className="pt-4 first:pt-0"><strong className="text-lg text-slate-800">180 DT</strong> pour les médecins (incl. conférences + 40 DT/atelier)</li>
                        <li className="pt-4 first:pt-0"><strong className="text-lg text-slate-800">160 DT</strong> pour les résidents (incl. conférences + 2 ateliers au choix)</li>
                        <li className="pt-4 first:pt-0"><strong className="text-lg text-slate-800">50 DT</strong> pour l'adhésion</li>
                    </ul>
                </InfoCard>
            </div>
            <div>
                 <InfoCard title="Hébergement" icon={<BedDouble className="w-8 h-8 text-slate-400"/>}>
                    <p className="text-slate-600 mb-4 font-semibold">Hôtel Royal Hammamet :</p>
                    <ul className="space-y-3">
                        <li>Single Demi-Pension: <strong className="text-slate-800">200 DT</strong> / nuitée</li>
                        <li>Double Demi-Pension: <strong className="text-slate-800">320 DT</strong> / nuitée</li>
                        <li>Single Pension Complète: <strong className="text-slate-800">250 DT</strong> / nuitée</li>
                        <li>Double Pension Complète: <strong className="text-slate-800">420 DT</strong> / nuitée</li>
                    </ul>
                </InfoCard>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <InfoCard title="Modalités de Paiement">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 border-b pb-1">Par virement bancaire</h3>
                        <p className="text-slate-600">Attijari Bank (agence El Manar)</p>
                        <p className="text-slate-600 font-mono bg-slate-100 p-2 rounded-md mt-1">RIB: 04 106 058004491269969</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-slate-900 mb-2 border-b pb-1">Autres modalités</h3>
                         <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
                             <li>Par prise en charge d'un laboratoire</li>
                             <li>Par chèque ou espèce sur place lors du congrès</li>
                         </ul>
                    </div>
                </div>
            </InfoCard>
            <InfoCard title="Contact Agence">
                 <div className="space-y-5">
                     <p className="font-bold text-lg text-slate-800">Agence Active Events</p>
                     <InfoItem label="Téléphone" value="+216 26 400 820" isLink type="tel" />
                     <InfoItem label="Email" value="jihene.benhamadi@activevents.com.tn" isLink type="mailto" />
                 </div>
            </InfoCard>
        </div>

        <div>
            <InfoCard title="Lieu du Congrès" icon={<Map className="w-8 h-8 text-slate-400"/>}>
                <div className="rounded-lg overflow-hidden h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.100912182741!2d10.54541811578331!3d36.38074919107954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd63eb6cbfcdcb%3A0x879a5c87a51db003!2sLe%20Royal%20Hotels%20and%20Resorts%20-%20Hammamet!5e0!3m2!1sfr!2stn"
                        className="w-full h-full min-h-[320px] border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Carte du lieu du congrès : Hôtel LE ROYAL, Hammamet"
                    ></iframe>
                </div>
            </InfoCard>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;