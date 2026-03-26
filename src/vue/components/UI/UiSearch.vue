<script setup lang="ts">
defineProps<{
    placeholder?: string,
}>()
</script>

<template>
<input 
    type="text" 
    class="search input search__input"
    :placeholder="placeholder || ''"
/>
</template>

<style scoped lang="scss">
.search{
    background-color: var(--pale-bg);    
    color: var(--pale-c);

    &__input{
        font-size: 0.9em;
        color: black;
    }
}
</style>

