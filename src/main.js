import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalDirectives from "./directives";
import { useShopStore } from "@/stores/shopStore";
import myPlugin from "@aidar.kz/my-plugin";

const app = createApp(App);

app.use(router);
app.use(globalDirectives);
app.use(createPinia());
app.use(myPlugin);

app.config.globalProperties.shopStore = useShopStore();
app.config.globalProperties.blogURL = "http://localhost:5000/posts";
app.config.globalProperties.twitterURL = "http://localhost:5000/tweets";
app.config.globalProperties.$log = console.log;

app.mount("#app");
