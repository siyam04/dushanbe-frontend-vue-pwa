importScripts("/precache-manifest.0235c27baa7ae7f5095843e11d8ea6fc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// import { CacheOnly, CacheFirst, NetworkOnly, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';


self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


///////////////////////////////// Form Submission & IDB Queue (workbox-background-sync) ////////////////////////////////

/* Work Submission (POST): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
/* Work Submission (POST): https://dushanbe.apis.lp-report.com/api/work-submissions/ */
const bgSyncPlugin = new workbox.backgroundSync.Plugin('work-submissions', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    'https://dushanbe.apis.lp-report.com/api/work-submissions/',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);


/////////////////////////////////////////////////////// GET APIs ///////////////////////////////////////////////////////

/* Bill List (GET): https://dushanbe.apis.lp-report.com/api/bills/ */
workbox.routing.registerRoute(
    "https://dushanbe.apis.lp-report.com/api/bills/",
    new workbox.strategies.NetworkFirst({
        cacheName: "bills",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 30 minutes
            })
        ],
        method: "GET",
    })
);


/* Type List (GET): https://dushanbe.apis.lp-report.com/api/types/ */
workbox.routing.registerRoute(
    "https://dushanbe.apis.lp-report.com/api/types/",
    new workbox.strategies.NetworkFirst({
        cacheName: "types",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 30 minutes
            })
        ],
        method: "GET"
    })
);

/* Material List (GET): https://dushanbe.apis.lp-report.com/api/materials/ */
workbox.routing.registerRoute(
    "https://dushanbe.apis.lp-report.com/api/materials/",
    new workbox.strategies.NetworkFirst({
        cacheName: "materials",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 30 minutes
            })
        ],
        method: "GET"
    })
);

/* Work Submission List (GET): https://dushanbe.apis.lp-report.com/api/work-submissions/ */
workbox.routing.registerRoute(
    "https://dushanbe.apis.lp-report.com/api/work-submissions/",
    new workbox.strategies.NetworkFirst({
        cacheName: "work-submissions-list",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 60 // 30 minutes
            })
        ],
        method: "GET",
        // params: {
        //     'user_id': parseInt(localStorage.getItem("id"))
        // },
        // user_id: request.url.searchParams.get('user_id')
    })
);


/////////////////////////////////////////////////////// Callback Example /////////////////////////////////////////////////////

// const matchFunction = ({url, event}) => {
//     // Return true if the route should match
//     u
//     return false;
// };
//
// workbox.routing.registerRoute(
//     matchFunction,
//     handler
// );

// workbox.routing.registerRoute(
//     "https://dushanbe.apis.lp-report.com/api/work-submissions/",
//     ({url, event}) => {
//         return caches.open(`${prefix}-${runtime}-${suffix}`).then((cache) => {
//             const customRequest = `${url.origin}${url.pathname}`;
//             return cache.match(customRequest).then((cacheRes) => {
//                 if (cacheRes) {
//                     return cacheRes;
//                 }
//                 return fetch(event.request).then((fetchRes) => {
//                     cache.put(customRequest, fetchRes.clone());
//                     return fetchRes;
//                 });
//             });
//         });
//     }
// );




