import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import { watchDebounced } from "@vueuse/core";

export const useCounterStore = defineStore("CounterStore", () => {
  const url = "https://kvdb.io/Ex6uXqdQLf3ptXgxJ1HpdA/hits";
  const count = ref(0);
  const decrement = () => count.value--;
  const increment = () => count.value++;

  fetch(url).then(async (res) => {
    if (res.ok) count.value = await res.json();
  });

  watchDebounced(
    count,
    () => {
      fetch(url, { method: "POST", body: count.value.toString() });
    },
    { debounce: 500 }
  );

  return {
    count,
    increment,
    decrement,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
