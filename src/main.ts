import { createApp } from "vue";
import App from "@/App.vue";
import BoilerplatePlugin from "@/plugins/BoilerplatePlugin";
import "@/assets/main.css";
import { createPinia } from "pinia";

import { PiniaLocalStoragePlugin } from "@/plugins/PiniaLocalStoragePlugin";
import { PiniaHistoryPlugin } from "@/plugins/PiniaHistoryPlugin";

//Init Pinia
const pinia = createPinia()
  .use(PiniaLocalStoragePlugin)
  .use(PiniaHistoryPlugin);

// Init App
// prettier-ignore
createApp(App)
.use(pinia)
.use(BoilerplatePlugin)
.mount("#app");
