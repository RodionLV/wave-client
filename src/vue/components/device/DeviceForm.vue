<script setup lang="ts">
import Card from "@v/components/common/Card.vue"
import { UiLabel, UiInput, UiSeparator } from "@ui/index"
import type { ICreateDevice, IUpdateDevice } from "@app/dtos";

const props = defineProps<{
    title?: string,
    info?: string,
    device: IUpdateDevice | ICreateDevice
}>()

const emit = defineEmits(["update:device"])

function updatePropDevice(key: string) {
    return (e: Event) => {
        const elem = e.target as HTMLInputElement
        console.log("update", elem.value)
        emit("update:device", {...props.device, [key]: elem.value})
    }
}
</script>

<template>
<card class="dev-form__box f-col">
    <h3 class="dev-form__title">{{ title || '' }}</h3>

    <ui-label label="Hostname" class="dev-form__label">
        <ui-input :value="device.hostname" @input="(e: Event)=>updatePropDevice('hostname')(e)" class="dev-form__input"/>
    </ui-label>

    <ui-label label="Ip" class="dev-form__label">
        <ui-input :value="device.ip" @input="(e: Event)=>updatePropDevice('ip')(e)" class="dev-form__input"/>
    </ui-label>

    <ui-label label="Location" class="dev-form__label">
        <ui-input :value="device.location" @input="(e: Event)=>updatePropDevice('location')(e)" class="dev-form__input"/>
    </ui-label>

    <ui-separator type="horizontal" class="dev-form__sep"/>

    <div class="dev-form__actions f-row">
        <slot name="actions"></slot>
    </div>

    <div class="dev-form__response">{{ info }}</div>
</card>
</template>

<style scoped lang="scss">
.dev-form{
    &__title{
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    &__box{
        max-width: 400px;
        width: 100%;
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
        width: 100%;
        font-size: 1.2em;
    }

    &__actions{
        font-size: 1em;
        height: 40px;

        justify-content: flex-end;
        gap: 0.6em;
    }

    &__response{
        color: rgb(94, 94, 94);
        margin-top: 0.8em;
        height: 1em;
        font-size: 0.82em;
        text-align: center;
    }
}
</style>