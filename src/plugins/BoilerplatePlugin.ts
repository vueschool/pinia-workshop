import type { App } from "vue";
import FontAwesomePlugin from "./FontAwesome";

export default function (app: App) {
  app.use(FontAwesomePlugin);
}
