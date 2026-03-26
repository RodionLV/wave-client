<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>

<template>
<label class="label__box">
    <div class="label__title">{{ label }}</div>

    <div><slot></slot></div>
</label>
</template>

<style scoped lang="scss">
.label{
    &__title{
        text-indent: 0.3em;
        margin-bottom: 0.2em;
    }
}
</style>