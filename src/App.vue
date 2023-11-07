<script setup>
import { useProductsStore } from "./stores/ProductsStore";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/CartStore";

const { addItem } = useCartStore();

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
