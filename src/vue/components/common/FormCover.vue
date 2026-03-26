<script setup lang="ts">
defineProps<{
    show: boolean
}>()
</script>

<template> 
<div class="cover f-col all-center" v-if="show">
    <slot></slot>
</div>
</template>

<style scoped lang="scss">
.cover{
    position: fixed;
    inset: 0;
    background-color: rgba(46, 46, 46, 0.3);
}
</style>