<script setup>
import { useProductsStore } from "./stores/ProductsStore";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();
const { addItem } = cartStore;

//subscribing to state and actions BEGIN
cartStore.$onAction(({ name, after }) => {
  if (name !== "addItem") return;
  after((count) => alert(`You've added ${count} items to the cart`));
});
cartStore.$subscribe((mutation, state) =>
  localStorage.setItem("cartState", JSON.stringify(state))
);
const savedCart = localStorage.getItem("cartState");
if (savedCart) cartStore.$state = JSON.parse(savedCart);
//subscribing to state and actions END

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);
productsStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="flex-wrap gap-5 sm:flex lg:flex-nowrap">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addItem(product.id, $event)"
      />
    </ul>
  </div>
</template>
