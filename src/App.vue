<script setup>
import products from "@/data/products.json";
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
