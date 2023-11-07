import { defineStore, acceptHMRUpdate } from "pinia";
import type { CartItem } from "@/types";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    addItem(itemId: string, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
