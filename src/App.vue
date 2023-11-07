<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import products from "@/data/products.json";
import { useProductsStore } from "./stores/ProductsStore";

const productsStore = useProductsStore();
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
