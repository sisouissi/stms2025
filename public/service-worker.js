const CACHE_NAME = 'cnp2025-pwa-cache-v3'; // Increment version
const urlsToCache = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json',
  '/index.css',
  // Icon
  'https://i.imgur.com/hUULOJ4.png'
];

// URLs externes à mettre en cache séparément
const externalUrls = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap',
  'https://esm.sh/react-dom@^19.1.1/',
  'https://esm.sh/react@^19.1.1/',
  'https://esm.sh/react@^19.1.1',
  'https://esm.sh/lucide-react@0.418.0',
  'https://esm.sh/groq-sdk',
  'https://esm.sh/@google/genai@^1.15.0'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        
        // Mise en cache des ressources locales
        const localPromises = urlsToCache.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`Failed to cache local ${url}: ${err}`);
          });
        });
        
        // Mise en cache des ressources externes avec gestion d'erreur améliorée
        const externalPromises = externalUrls.map(url => {
          return fetch(url, { mode: 'no-cors' })
            .then(response => {
              if (response.ok || response.type === 'opaque') {
                return cache.put(url, response);
              }
              throw new Error(`HTTP ${response.status}`);
            })
            .catch(err => {
              console.warn(`Failed to cache external ${url}: ${err.message}`);
            });
        });
        
        return Promise.all([...localPromises, ...externalPromises]);
      })
      .catch(err => {
        console.error('Cache installation failed:', err);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a stream
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // Network failed, try to serve from cache
          return caches.match(event.request);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
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
    })
  );
});