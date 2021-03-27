module.exports = {
    pwa: {
        name: "dushanbe-frontend-vue-pwa",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    }
};