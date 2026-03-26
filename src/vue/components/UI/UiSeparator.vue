<script setup lang="ts">
withDefaults(defineProps<{
    type?: "vertical" | "horizontal"
}>(), { type: "horizontal" })
</script>

<template>
<div 
    class="separator" 
    :class="(type == 'vertical' ? 'vertical' : 'horizontal')"
></div>
</template>

<style scoped>
.separator{
    background-color: var(--pale-bg);
    border-radius: 50%;

    &.vertical{
        height: 100%;
        width: 2px;
    }

    &.horizontal{
        width: 100%;
        height: 2px;
    }
}
</style>