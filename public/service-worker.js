const CACHE_NAME = 'cnp2025-pwa-cache-v6'; // Incremented version
const PRECACHE_URLS = [
  '/',
  '/index.html',
];

// Install: precache the app shell.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
      .catch(err => console.error('Precaching failed:', err))
  );
});

// Activate: clean up old caches.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: apply caching strategies.
self.addEventListener('fetch', event => {
  const { request } = event;

  // Always ignore non-GET requests.
  if (request.method !== 'GET') {
    return;
  }

  // For HTML pages (navigation), use Network Falling Back to Cache.
  // This ensures users get the latest version if they are online.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // If the network request is successful, cache it for offline use.
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If the network request fails, serve the cached version.
          return caches.match(request);
        })
    );
    return;
  }
  
  // For all other assets (JS, CSS, images, etc.), use Cache First.
  // These assets are expected to be revisioned (hashed filenames).
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // If not in cache, fetch from the network and cache it.
        return fetch(request).then(networkResponse => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });
          return networkResponse;
        });
      })
  );
});