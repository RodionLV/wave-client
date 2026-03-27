<script setup lang="ts">
import type { Option } from '../types';
import type { ActiveFilter } from '@app/types';

import { UiSearch, UiSelect, UiButton } from '@ui/index';

import { ref } from "vue"

defineProps<{
    showCreateForm: () => void,
    search: string,
    activeState: ActiveFilter
}>()

const emit = defineEmits(["update:search", "update:active-state"])


const options: Option[] = [
    { label: "All", value: "all"},
    { label: "Active", value: "active" },
    { label: "Not active", value: "not_active" }
]


let selectedValue = ref(options[0])

const onSelectedValue = (value: Option) => {
    emit("update:active-state", value.value as ActiveFilter)
    selectedValue.value = value
}

const onInput = (e: InputEvent) => {
    const elem = e.target as HTMLInputElement
    emit("update:search", elem.value)
}
</script>

<template>
<div class="filter__box f-row items-center">
    <ui-search placeholder="Search by hostname..." @input="onInput" :value="search"/>

    <ui-select @update:selected-value="onSelectedValue" :selected-value="selectedValue" :options="options"/>

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