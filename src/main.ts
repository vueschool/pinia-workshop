import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";


// Init App
createApp(App)
  .use(BoilerplatePlugin)
  .mount("#app");
