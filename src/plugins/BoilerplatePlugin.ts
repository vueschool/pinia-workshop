import type { App } from "vue";
import FontAwesomePlugin from "./FontAwesome";
import GlobalComponentsPlugin from "./GlobalComponentsPlugin";
import "@/assets/main.pcss";

export default function(app: App){
  app.use(FontAwesomePlugin)
  app.use(GlobalComponentsPlugin)
}