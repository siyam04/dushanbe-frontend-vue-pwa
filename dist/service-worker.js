importScripts("/precache-manifest.7fd6fb732c186bf9170fe7d6781675eb.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


/* Testing */

/* workbox-background-sync */
const bgSyncPlugin = new workbox.backgroundSync.Plugin('queueExample', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

/* Testing END */


// /* Bill List (GET): https://dushanbe-backend-apis.herokuapp.com/api/bills/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/bills/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "bills",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 10 * 60 // 10 minutes
//             })
//         ],
//         method: "GET"
//     })
// );
//
// /* Type List (GET): https://dushanbe-backend-apis.herokuapp.com/api/types/ */
// workbox.routing.registerRoute(
//     "https://dushanbe-backend-apis.herokuapp.com/api/types/",
//     new workbox.strategies.NetworkFirst({
//         cacheName: "types",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 10 * 60 // 10 minutes
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
//                 maxAgeSeconds: 10 * 60 // 10 minutes
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
//                 maxAgeSeconds: 10 * 60 // 10 minutes
//             })
//         ],
//         method: "GET"
//     })
// );

