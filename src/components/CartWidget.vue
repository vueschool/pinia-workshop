<script setup lang="ts">
// imports
import products from "@/data/products.json";
import cartItems from "@/data/cart.json";

// data
const active = ref(false);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="absolute cart-count">10</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div>
        <ul class="items-in-cart">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :product="products.find((p) => item.id === p.id)"
            :count="item.count"
            @updateCount=""
            @clear=""
          />
        </ul>
        <div class="flex justify-end mb-5 text-2xl">
          Total: <strong>$40</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="mr-2 secondary">Clear Cart</AppButton>
          <AppButton class="primary">Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <!-- <div><em>Cart is Empty</em></div> -->
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
