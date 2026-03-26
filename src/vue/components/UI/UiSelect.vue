<script setup lang="ts">
import UiIcon from "./UiIcon.vue";
import Arrow from "@v/assets/icons/arrow.svg"
import { ref } from "vue"
import type { Option } from "../types";

withDefaults(defineProps<{
    selectedValue: Option
    options: Option[]
}>(), {})

const emit = defineEmits<{
    (e: "update:selectedValue", value: Option): void
}>()

let showOptionsFlag = ref(false)

const onSelect = (option: Option) => {
    emit("update:selectedValue", option)
    toggleShowOptions()
}

const toggleShowOptions = () => {
    showOptionsFlag.value = !showOptionsFlag.value
}

const maxLengthLabel = (options: Option[]): number => {
    let max = 0;
    for(let option of options) {
        if( option.label.length > max ){
            max = option.label.length
        }
    }
    console.log(max)
    return max
}
</script>

<template>
<div class="select__box input" :style="{width: (maxLengthLabel(options) * 1.2 + 5 ) + 'ch'}">
    <div class="select__value f-row items-center" @click="toggleShowOptions">
        <span>{{ selectedValue.label }}</span>
        <ui-icon :path="Arrow" class="select__arrow" :class="{ 'active': showOptionsFlag }"/>
    </div>

    <div class="select__options f-col" v-show="showOptionsFlag">
        <div 
            v-for="option in options" 
            @click="onSelect(option)"
            class="select__option"
        >
            <span>{{ option.label }}</span>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.select{
    &__box{
        position: relative;
        background-color: var(--pale-primary);
        border: 1px solid var(--primary);
    }

    &__value{
        height: 100%;
        justify-content: space-between;
    }

    &__options{
        position: absolute;
        top: calc(100% - 0.3em);
        left: -1px;
        right: -1px;

        background-color: var(--pale-primary);
        border-radius: 0 0 var(--input-r) var(--input-r);
        border: 1px solid var(--primary);
        border-width: 0 1px 1px 1px;
    }

    &__option{
        padding: 0.4em 1.2em;
        border-top: 1px solid var(--primary);
    }

    &__arrow{
        width: 1.6em;
        height: 1.6em;
        transition: 0.3s;

        &.active{
            transform: rotate(180deg);
        }
    }
}
</style>