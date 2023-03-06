<script setup lang="ts">
    import { getProducts, type Product } from '../model/products'

    const products = ref(getProducts());
</script>

<template>
    <div>
        <h1 class="title">
            These will be the products
        </h1>
        <h2 class="subtitle">
            If you got here then you are logged in
        </h2>
        <div class="product-list">
            <div class="product" v-for="product in products" :key="product.id">
                <img :src="product.thumbnail" alt="product image" />
                <h3>{{product.title}}</h3>
                <p>{{product.description}}</p>
                <p>{{product.price}}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.product-list{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:aliceblue;
}

.products{
    width:10rem;
    padding:1rem;
    margin:1rem;

}
</style>