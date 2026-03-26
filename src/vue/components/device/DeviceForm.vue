<script setup lang="ts">
import Card from "@v/components/common/Card.vue"
import { UiLabel, UiInput, UiSeparator } from "@ui/index"
import type { ICreateDevice, IUpdateDevice } from "../dtos";

defineProps<{
    title?: string,
    device: IUpdateDevice | ICreateDevice
}>()
</script>

<template>
<card class="dev-form__box f-col">
    <h3 class="dev-form__title">{{ title || '' }}</h3>

    <ui-label label="Hostname" class="dev-form__label">
        <ui-input v-model="device.hostname" class="dev-form__input"/>
    </ui-label>

    <ui-label label="Ip" class="dev-form__label">
        <ui-input v-model="device.ip" class="dev-form__input"/>
    </ui-label>

    <ui-label label="Location" class="dev-form__label">
        <ui-input v-model="device.location" class="dev-form__input"/>
    </ui-label>

    <ui-separator type="horizontal" class="dev-form__sep"/>

    <div class="dev-form__actions f-row">
        <slot name="actions"></slot>
    </div>

    <div class="dev-form__response"></div>
</card>
</template>

<style scoped lang="scss">
.dev-form{
    &__title{
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    &__box{

    }

    &__sep{
        margin: 1em 0;
    }

    &__label{
        &:not(:first-child){
            margin-top: 0.8em;
        }
    }

    &__input{
        height: 40px;
        font-size: 1.2em;
    }

    &__actions{
        font-size: 1em;
        height: 40px;

        justify-content: flex-end;
        gap: 0.6em;
    }

    &__response{
        margin-top: 0.8em;
        height: 1em;
        font-size: 0.9em;
        text-align: center;
    }
}
</style>