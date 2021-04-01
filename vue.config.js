module.exports = {
    pwa: {
        name: "dushanbe-pwa",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    }
};