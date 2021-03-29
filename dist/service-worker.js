importScripts("/precache-manifest.ba267318bc34736deff9f9b7d59c6bfa.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* testing */
const bgSyncPlugin = new workbox.backgroundSync.Plugin('queueExample', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    workbox.strategies.networkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

/* my codes */

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
//
// workbox.setConfig({
//     debug: true
// });
//
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});




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

