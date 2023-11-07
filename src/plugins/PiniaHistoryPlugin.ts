import type { PiniaPluginContext } from "pinia";
import { useRefHistory } from "@vueuse/core";
import type { UseRefHistoryRecord } from "@vueuse/core";
import { ref, nextTick } from "vue";

export function PiniaHistoryPlugin({ store, options }: PiniaPluginContext) {
  const doingHistory = ref(false);
  const state = ref(JSON.stringify(store.$state));
  const { history, undo, redo } = useRefHistory(state, { deep: true });
  store.undo = async () => {
    doingHistory.value = true;
    undo();
    store.$state = JSON.parse(state.value);
    await nextTick();
    doingHistory.value = false;
  };
  store.redo = async () => {
    doingHistory.value = true;
    redo();
    store.$state = JSON.parse(state.value);
    await nextTick();
    doingHistory.value = false;
  };
  store.$subscribe((mutation, st) => {
    if (!doingHistory.value) {
      state.value = JSON.stringify(st);
    }
  });
  store.history = history;
}

import "pinia";

declare module "pinia" {
  export interface PiniaCustomProperties {
    undo(): void;
    redo(): void;
  }

  export interface PiniaCustomStateProperties<S> {
    history?: Ref<UseRefHistoryRecord<string>[]>;
  }
}

export default PiniaHistoryPlugin;
