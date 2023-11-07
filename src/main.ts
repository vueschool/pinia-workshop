import { createApp } from "vue";
import App from "@/App.vue";
import BoilerplatePlugin from "@/plugins/BoilerplatePlugin";
import "@/assets/main.css";
import { createPinia } from "pinia";

// Init App
// prettier-ignore
createApp(App)
.use(createPinia())
.use(BoilerplatePlugin)
.mount("#app");
