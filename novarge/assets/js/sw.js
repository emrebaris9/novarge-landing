// Statik varlıkları önbellekleme
const CACHE_NAME = 'static-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/assets/css/main.css',
  '/assets/css/bootstrap.min.css',
  '/assets/images/logo/logo.svg',
  '/assets/images/logo/white-logo.svg',
  '/assets/fonts/LineIcons.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 