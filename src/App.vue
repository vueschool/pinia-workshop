<script setup>
import { useProductsStore } from "./stores/ProductsStore";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/CartStore";

import { useCounterStore } from "./stores/CounterStore";
const counter = useCounterStore();

const cartStore = useCartStore();
const { addItem } = cartStore;

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);
productsStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />

    <AppButton @click="counter.increment"
      >Increment {{ counter.count }}</AppButton
    >
    <AppButton @click="counter.decrement"
      >Decrement {{ counter.count }}</AppButton
    >
    <br /><br />

    <AppButton @click="cartStore.undo">Undo</AppButton>
    <AppButton @click="cartStore.redo">Redo</AppButton>
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
