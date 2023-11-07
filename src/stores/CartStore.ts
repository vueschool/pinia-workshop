import { defineStore, acceptHMRUpdate } from "pinia";

export const useCartStore = defineStore("CartStore", {});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
