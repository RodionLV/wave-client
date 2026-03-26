<script setup lang="ts">
defineProps<{
    path: string
}>()
</script>

<template>
<div class="icon"><img :src="path"></div>
</template>

<style lang="scss">
.icon{
    display: inline-block; 

    & img{
        height: 100%;
        width: 100%;
    }
}
</style>