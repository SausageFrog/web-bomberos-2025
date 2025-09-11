const CACHE_NAME = 'radio-cbt-v1';
const APP_SHELL = [
  '/radio-live.html',
  '/manifest.webmanifest',
  '/data/radio-codes.temuco.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);
  // Nunca cachear el player/stream de Broadcastify
  if (/broadcastify\.com/.test(url.hostname)) return; // network only

  // Cache First para nuestros recursos
  if (request.method === 'GET') {
    e.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
        return resp;
      }).catch(() => cached))
    );
  }
});

