var CACHE_NAME = 'rajat-cache-v1';
var urlsToCache = [
  '/index.html',
  '/css/style.css',
  '/css/hamburgermenu.css',
  '/js/main.js',
  '/js/jquery-3.2.1.min.js',
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    })
  );
});