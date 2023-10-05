import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/css/index.css";
import "./assets/css/global.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { projectAuth } from "./configs/firebase";
library.add(fab);
library.add(fas);
library.add(far);

axios.defaults.baseURL = "http://localhost:8800";

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.mount("#app");
  }
});
