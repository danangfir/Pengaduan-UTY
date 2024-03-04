import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/tailwind.css";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount("#app");
