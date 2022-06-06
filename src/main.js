import { createApp } from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueToast, {
  position: "bottom",
});

app.use(router);

app.mount("#app");
