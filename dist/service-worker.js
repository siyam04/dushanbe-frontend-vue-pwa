importScripts("/precache-manifest.5d5afa37ee4d289c5e4119288fd025fb.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

//////////////////////////////////////////////////////// TEST /////////////////////////////////////////////////
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/bills/',
    new workbox.strategies.NetworkFirst({
        cacheName: 'NF-bills-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/types/',
    new workbox.strategies.NetworkOnly({
        cacheName: 'NO-types-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    new workbox.strategies.CacheFirst({
        cacheName: 'CF-ws-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'SWR-ws-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
            }),
        ],
    }),
);

//////////////////////////////////////////////////////// TEST END /////////////////////////////////////////////


// self.__precacheManifest = [].concat(self.__precacheManifest || []);
//
// workbox.setConfig({
//     debug: true
// });
//
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// /* Form Submission & IDB Queue (workbox-background-sync) */
//
// /* Work Submission (POST): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
// const bgSyncPlugin2 = new workbox.backgroundSync.Plugin('work-submissions', {
//     maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
// });
//
// workbox.routing.registerRoute(
//     'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
//     new workbox.strategies.NetworkOnly({
//         plugins: [bgSyncPlugin2]
//     }),
//     'POST'
// );
//
//
// /* GET APIs */
//
// /* Bill List (GET): https://dushanbe-backend-apis.herokuapp.com/api/bills/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/bills/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "bills",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 30 * 60 // 10 minutes
//             })
//         ],
//         method: "GET"
//     })
// );
//
//
// /* Type List (GET): https://dushanbe-backend-apis.herokuapp.com/api/types/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/types/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "types",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 30 * 60 // 10 minutes
//             })
//         ],
//         method: "GET"
//     })
// );
//
// /* Material List (GET): https://dushanbe-backend-apis.herokuapp.com/api/materials/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/materials/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "materials",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 30 * 60 // 10 minutes
//             })
//         ],
//         method: "GET"
//     })
// );
//
// /* Work Submission List (GET): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "work-submissions",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 30 * 60 // 10 minutes
//             })
//         ],
//         method: "GET",
//     })
// );




