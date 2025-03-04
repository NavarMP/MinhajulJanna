// Service Worker for Minhajul Janna Dars Koyilandi Website

const CACHE_NAME = 'minhajul-janna-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/admission.html',
  '/posts.html',
  '/videos.html',
  '/articles.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/minhajul janna logo.svg',
  '/assets/favicon.ico',
  // Add more assets as needed
];

// Install event - Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate event - Clean up old caches
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

// Fetch event - Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }).catch(() => {
        // If both cache and network fail, show offline page
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'admission-form-sync') {
    event.waitUntil(syncAdmissionForm());
  }
});

// Helper function to sync admission form data
function syncAdmissionForm() {
  return fetch('/api/submit-admission-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: localStorage.getItem('pendingAdmissionForm'),
  })
  .then((response) => {
    if (response.ok) {
      localStorage.removeItem('pendingAdmissionForm');
    }
  })
  .catch((error) => {
    console.error('Sync failed:', error);
  });
}

// Push notification event
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/assets/icons/icon-192x192.png',
    badge: '/assets/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});