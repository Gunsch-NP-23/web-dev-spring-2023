
<template>
    <div class="flyout">
        <slot/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.flyout{
    position: fixed;
    top: 52px;
    right: 0;
    width: 20rem;
    height: calc 100vh - 52px;
    background-color:white;
}

.flyout.hover{
    right:0;
}
</style>