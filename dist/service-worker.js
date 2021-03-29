importScripts("/precache-manifest.0678a5734aefb3e51ad0bc239d907b89.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
        method: "GET",
    })
);

