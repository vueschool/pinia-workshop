import { defineStore, acceptHMRUpdate } from "pinia";
import type { Product } from "@/types";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fill() {
      const res = await fetch("/products.json");
      this.products = await res.json();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
