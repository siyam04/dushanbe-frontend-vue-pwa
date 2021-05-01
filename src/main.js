import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createApp } from "vue";
// import vSelect from 'vue-select';
// import 'vue-select/dist/vue-select.css';
import App from "./App.vue";
import "./Icon";
import "./registerServiceWorker";
import router from "./router";


/* app config */
createApp(App)
  .use(router)
  .component("fa-icon", FontAwesomeIcon)
  // .component('v-select', vSelect)
  .mount("#app");
