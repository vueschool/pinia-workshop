import { defineStore, acceptHMRUpdate } from "pinia";
import type { CartItem } from "@/types";
import { useProductsStore } from "@/stores/ProductsStore";

export const useCartStore = defineStore("CartStore", {
  localStorage: true,
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    count: (state) => state.items.reduce((p, item) => item.count + p, 0),
    isEmpty(): boolean {
      return this.count === 0;
    },
    total: (state) => {
      const { productById } = useProductsStore();
      return state.items.reduce((p, item) => {
        const product = productById(item.id);
        return product?.price ? product.price * item.count + p : p;
      }, 0);
    },
  },
  actions: {
    addItem(itemId: string, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
      return count;
    },
    removeItem(itemId: string) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
    clear() {
      this.items = [];
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
