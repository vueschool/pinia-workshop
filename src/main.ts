import { createApp } from "vue";
import App from "@/App.vue";
import BoilerplatePlugin from "@/plugins/BoilerplatePlugin";
import "@/assets/main.css";

// Init App
createApp(App).use(BoilerplatePlugin).mount("#app");
