<script setup lang="ts">
import type { Product } from "@/types";

defineProps<{
  product: Product;
}>();

defineEmits<{
  addToCart: [count: number];
}>();

// data
const count = ref(0);
</script>
<template>
  <li class="card">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} -
      <span class="text-green-500">${{ product.price }}</span>
      <div class="m-4 text-center">
        <AppCountInput v-model="count" />
      </div>
      <AppButton class="primary" @click="$emit('addToCart', count), (count = 0)"
        >Add to Cart</AppButton
      >
    </div>
  </li>
</template>
