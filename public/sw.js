// Bump de versión para forzar actualización del HTML y datos
const CACHE_NAME = 'radio-cbt-v3';
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

  if (request.method !== 'GET') return; // solo GET

  // Network First para documentos/HTML (incluye /radio-live.html): evita servir una versión vieja
  const isHTML = request.mode === 'navigate' || request.destination === 'document' || url.pathname.endsWith('.html');
  if (isHTML) {
    e.respondWith(
      fetch(request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // Cache First para otros recursos estáticos (JSON, manifest, etc.)
  e.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
      return resp;
    }).catch(() => cached))
  );
});
