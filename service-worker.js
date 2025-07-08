 const CACHE_NAME = 'matching-pairs-cache-v1';
  const urlsToCache = [
    '.',
    'index.html',
    '뒷면.png',
    '기도.png',
    '말씀.png',
    '성례.png',
    '은혜.png'
  ];
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
  });
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  -->
