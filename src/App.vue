<script setup>
import { useProductsStore } from "./stores/ProductsStore";
import { storeToRefs } from "pinia";

const { products } = storeToRefs(useProductsStore());
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="flex-wrap gap-5 sm:flex lg:flex-nowrap">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
