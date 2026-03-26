<script setup lang="ts">
withDefaults(defineProps<{
    type?: "primary" | "secondary"
}>(), { type: "primary" })
</script>

<template>
<button class="button input" :class="{ 'secondary': type == 'secondary' }">
    <slot></slot>
</button>
</template>

<style scoped lang="scss">
.button{
    font-size: inherit;
    background-color: var(--p-btn-bg);
    color: var(--p-btn-c);

    &.secondary{
        background-color: var(--s-btn-bg);
        color: var(--s-btn-c);
    }
}
</style>