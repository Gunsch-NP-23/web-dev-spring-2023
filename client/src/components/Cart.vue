<script setup lang="ts">
    import { useCart } from '@/model/cart';
    const cart = useCart();
    const products = getProducts();
    
    cart.value.push
</script>

<template>
    <div class="cart">
    <h1 class=""title>Cart</h1>
    <p>{{ cart.length }}</p>
    <div class="cart-item"  v-for="item"
    </div>
</template>

<style scoped>
.cart {
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>