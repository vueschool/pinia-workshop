import { defineStore, acceptHMRUpdate } from "pinia";
import products from "@/data/products.json";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => ({
    products,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
