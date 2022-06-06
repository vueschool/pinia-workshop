import AppButton from "@/components/AppButton.vue";
import AppCountInput from "@/components/AppCountInput.vue";
import AppModalOverlay from "@/components/AppModalOverlay.vue";
import type { App } from "vue";
export default function GlobalComponentsFunction(app: App){
  app.component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
}