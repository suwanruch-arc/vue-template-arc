import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
//axios
import axios from "axios";

//router
import router from "./router";

//quasar
import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/material-symbols-rounded";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);
app.config.globalProperties.$axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

app.use(router);
app.use(Quasar, {
  plugins: {
    //custom plugin
  },
});
app.mount("#app");
