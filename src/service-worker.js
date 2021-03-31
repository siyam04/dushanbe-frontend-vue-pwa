self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


/* workbox-background-sync */

/* Work Submission (POST): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
const bgSyncPlugin2 = new workbox.backgroundSync.Plugin('work-submissions', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin2]
    }),
    'POST'
);

/* Bill List (GET): https://dushanbe-backend-apis.herokuapp.com/api/bills/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/bills/",
    new workbox.strategies.NetworkFirst({
        cacheName: "bills",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);


/* Type List (GET): https://dushanbe-backend-apis.herokuapp.com/api/types/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/types/",
    new workbox.strategies.NetworkFirst({
        cacheName: "types",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);

/* Material List (GET): https://dushanbe-backend-apis.herokuapp.com/api/materials/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/materials/",
    new workbox.strategies.NetworkFirst({
        cacheName: "materials",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);

/* Work Submission List (GET): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",
    // new workbox.strategies.NetworkFirst({
    new workbox.strategies.CacheFirst({
        cacheName: "work-submissions",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);

