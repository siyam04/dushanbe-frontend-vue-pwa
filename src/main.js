import { createApp } from 'vue'
// import 'bootstrap'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


/* app config */
createApp(App).use(router).mount('#app')
