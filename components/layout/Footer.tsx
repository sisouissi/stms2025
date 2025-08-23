import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#033238] to-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Congrès STMS 2025</h3>
            <ul className="space-y-2 text-white/90">
              <li>8ème Congrès de Médecine du Sommeil</li>
              <li>Hôtel LE ROYAL, Hammamet</li>
              <li>9-11 Octobre 2025</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="https://stms.org.tn" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">Site Web : stms.org.tn</a></li>
              <li><a href="mailto:contact@stms.org.tn" className="text-white/90 hover:text-white transition-colors">Email : contact@stms.org.tn</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Agence</h3>
            <ul className="space-y-2 text-white/90">
              <li>Active Events</li>
              <li>GSM: +216 26 400 820</li>
              <li><a href="mailto:jihene.benhamadi@activevents.com.tn" className="text-white/90 hover:text-white transition-colors">jihene.benhamadi@activevents.com.tn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2025 STMS. Tous droits réservés - <span className="font-semibold text-amber-200">Conception Dr Zouhair Souissi</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
