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

/* Testing (https://developers.google.com/web/tools/workbox/modules/workbox-routing?hl=en) */
const matchCb = ({url, request, event}) => {
    return (url.pathname === "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/");
};

const handlerCb = async ({url, request, event, params}) => {
    const response = await fetch(request);
    const responseBody = await response.json();
    return new Response(`${responseBody} <!-- Look Ma. Added Content. -->`, {
        headers: response.headers,
    });
};

workbox.routing.registerRoute(
    new RegExp('/api/.*\\.json'),
    handlerCb,
    'POST'
);