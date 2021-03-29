self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


/* Bill List (GET): https://dushanbe-backend-apis.herokuapp.com/api/bills/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/bills/",
    new workbox.strategies.NetworkFirst({
        cacheName: "bills",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 10 * 60 // 10 minutes
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
                maxAgeSeconds: 10 * 60 // 10 minutes
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
                maxAgeSeconds: 10 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);

/* Work Submission List (GET): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
workbox.routing.registerRoute(
    "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",
    new workbox.strategies.NetworkFirst({
        cacheName: "work-submissions",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 10 * 60 // 10 minutes
            })
        ],
        method: "GET"
    })
);

const cacheName = 'pages';
const matchCallback = ({ request }) => request.mode === 'navigate';
// const networkTimeoutSeconds = 3;

workbox.routing.registerRoute(
    matchCallback,
    new NetworkFirst({
        // networkTimeoutSeconds,
        cacheName,
        plugins: [
            new workbox.expiration.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);
