const CACHE_NAME = 'cnp2025-pwa-cache-v5'; // Increment version
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json', // Crucial for PWA functionality
];

// URLs externes à mettre en cache séparément
const externalUrls = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://i.imgur.com/hUULOJ4.png'
];

// Fonction pour vérifier si une ressource existe avant de la mettre en cache
async function cacheResourceSafely(cache, url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      await cache.put(url, response);
      console.log(`Successfully cached: ${url}`);
      return true;
    } else {
      console.warn(`Failed to fetch ${url}: ${response.status}`);
      return false;
    }
  } catch (err) {
    console.warn(`Failed to cache ${url}: ${err.message}`);
    return false;
  }
}

// Fonction pour mettre en cache les ressources externes avec no-cors
async function cacheExternalResourceSafely(cache, url) {
  try {
    const response = await fetch(url, { mode: 'no-cors' });
    if (response.ok || response.type === 'opaque') {
      await cache.put(url, response);
      console.log(`Successfully cached external: ${url}`);
      return true;
    } else {
      console.warn(`Failed to fetch external ${url}: ${response.status}`);
      return false;
    }
  } catch (err) {
    console.warn(`Failed to cache external ${url}: ${err.message}`);
    return false;
  }
}

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('Opened cache');
        
        // Mise en cache des ressources locales
        const localPromises = urlsToCache.map(url => cacheResourceSafely(cache, url));
        
        // Mise en cache des ressources externes
        const externalPromises = externalUrls.map(url => cacheExternalResourceSafely(cache, url));
        
        // Attendre que toutes les tentatives de mise en cache soient terminées
        await Promise.allSettled([...localPromises, ...externalPromises]);
        console.log('Cache installation completed');
      })
      .catch(err => {
        console.error('Cache installation failed:', err);
      })
  );
  
  // Force l'activation immédiate du nouveau service worker
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Ignorer les requêtes vers les APIs externes et les ressources qui changent souvent
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('google') ||
      event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log(`Serving from cache: ${event.request.url}`);
          return response;
        }
        
        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200) { // Ne pas mettre en cache les réponses non 'basic' pour éviter les erreurs
            return response;
          }
          
          // Clone the response because it's a stream
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            })
            .catch(err => console.warn('Failed to update cache:', err));
          
          return response;
        }).catch(() => {
          // Network failed, try to serve from cache
          console.log(`Network failed, trying cache for: ${event.request.url}`);
          return caches.match(event.request);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      // Prendre le contrôle immédiatement
      return self.clients.claim();
    })
  );
});
