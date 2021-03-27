/* check online/offline status */
function app_mode() {
    window.navigator.onLine ? alert('You are Online 👍🏼') : alert('You are Offline 😱')
}

/* router guard */
function guardRoute(to, from, next) {
    let isAuthenticated = false
    isAuthenticated = !!localStorage.getItem('token')
    isAuthenticated ? next() : next('/')
}

/* configure */
const router_middlewares = {
    app_mode,
    guardRoute
}

/* exporting methods */
export default router_middlewares

