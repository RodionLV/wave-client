<script setup lang="ts">
import { type IDevice } from '@app/entities/Device';

defineProps<{
    showEditForm: (dev: IDevice) => void,
    items: IDevice[]
}>()
</script>

<template>
<table class="devices__list">
    <thead class="devices__list-header">

        <tr>
            <th>Id</th>
            <th>Hostname</th>
            <th>Location</th>
            <th>Ip</th>
            <th>Active</th>
        </tr>

    </thead>
    <tbody>

        <tr v-for="device in items" class="devices__item" @click="showEditForm(device)">
            <td>{{ device.id }}</td>
            <td class="devices__hostname">{{ device.hostname.getValue() }}</td>
            <td>{{ device.location }}</td>
            <td>{{ device.ip.getValue() }}</td>
            <td>
                <span v-if="device.is_active" class="devices__active">active</span>
                <span v-else class="devices__not-active">not active</span>
            </td>
        </tr>

    </tbody>
    
</table>

<div v-if="items.length == 0" class="devices__banner f-row center">List devices is empty</div>
</template>

<style scoped lang="scss">
.devices{
    &__list{
        border-spacing: 0 0.3em;
        width: 100%;

        &-header{
            background-color: var(--pale-bg);

            text-align: left;
            color: var(--pale-c);
        }

        & tr:first-child{
            margin-top: 0.3em;
        }

        & td, th{
            padding: 0.5em 0.8em;
        }

        & td:last-child, th:last-child{
            border-radius: 0 0.3em 0.3em 0;
        }

        & td:first-child, th:first-child{
            border-radius: 0.3em 0 0 0.3em;
        }
    }

    &__hostname {
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &__banner{
        margin-top: 1.5em;
        width: 100%;
        text-align: center;
    }

    &__item{
        cursor: pointer;

        &:hover {
            background-color: var(--pale-secondary);
        }
    }

    &__active{
        color: #009b6c;
    }

    &__not-active{
        color: rgb(87, 87, 87);
    }
}
</style>