import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Icon";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* app config */
createApp(App)
  .use(router)
  .component("fa-icon", FontAwesomeIcon)
  .mount("#app");
