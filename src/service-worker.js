self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


/* workbox-background-sync */

/* Login (POST): https://dushanbe-backend-apis.herokuapp.com/api/login/ */
const bgSyncPlugin1 = new workbox.backgroundSync.Plugin('login', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/login/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin1]
    }),
    'POST'
);

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
const bgSyncPlugin3 = new workbox.backgroundSync.Plugin('bills', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/bills/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin3]
    }),
    'GET'
);


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
const bgSyncPlugin4 = new workbox.backgroundSync.Plugin('types', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/types/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin4]
    }),
    'GET'
);


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
const bgSyncPlugin5 = new workbox.backgroundSync.Plugin('materials', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/materials/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin5]
    }),
    'GET'
);


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
const bgSyncPlugin6 = new workbox.backgroundSync.Plugin('work-submissions-list', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin6]
    }),
    'GET'
);