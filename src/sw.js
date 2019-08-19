const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'css/styles.min.css',
  'js/bundle.min.js',
];

// Install
self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.addAll(precacheResources))
  );
});

// Activate
self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

// Fetch
self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
