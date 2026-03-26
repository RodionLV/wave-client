<script setup lang="ts">
import { UiSearch, UiSelect, UiButton } from '@ui/index';
import type { Option } from '../types';

import { ref } from "vue"

defineProps<{
    showCreateForm: () => void
}>()

const options: Option[] = [
    { label: "All", value: "all"},
    { label: "Active", value: "active" },
    { label: "Not active", value: "not_active" }
]

let selectedValue = ref(options[0])
</script>

<template>
<div class="filter__box f-row items-center">
    <ui-search placeholder="Search by hostname..."/>

    <ui-select v-model:selectedValue="selectedValue" :options="options"/>

    <ui-button class="filter__btn" @click="showCreateForm">Создать</ui-button>
</div>
</template>

<style scoped lang="scss">
.filter{
    &__box{
        gap: 1.6em;
        height: 40px;
    }

    &__btn{
        font-size: 1em;
        margin-left: auto;
    }
}
</style>