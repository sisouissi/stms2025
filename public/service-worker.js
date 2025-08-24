const CACHE_NAME = 'cnp2025-pwa-cache-v2'; // Bump version
const urlsToCache = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json',
  '/index.css',
  // Icon
  'https://i.imgur.com/hUULOJ4.png',
  // Key external assets
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
        const promises = urlsToCache.map(url => {
            const request = new Request(url, {mode: 'no-cors'});
            return cache.add(request).catch(err => console.warn(`Failed to cache ${url}: ${err}`));
        });
        return Promise.all(promises);
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
        return fetch(event.request);
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
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});