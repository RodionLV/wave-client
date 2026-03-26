<script setup lang="ts">
import type { IUpdateDevice } from '../dtos/index';

defineProps<{
    showEditForm: (dev: IUpdateDevice) => void
}>()

interface IDevice {
    id: number,
    hostname: string,
    location: string,
    ip: string,
    is_active: boolean
}

const devices: IDevice[] = [
    {
        id: 1,
        hostname: "www.example.com",
        location: "city",
        ip: "123.33.23.12",
        is_active: true
    },

    {
        id: 2,
        hostname: "www.example.com",
        location: "city",
        ip: "123.33.23.12",
        is_active: true
    },

    {
        id: 3,
        hostname: "www.example.com",
        location: "city",
        ip: "123.33.23.12",
        is_active: false
    },
]
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

        <tr v-for="device in devices" class="devices__item" @click="showEditForm(device)">
            <td>{{ device.id }}</td>
            <td>{{ device.hostname }}</td>
            <td>{{ device.location }}</td>
            <td>{{ device.ip }}</td>
            <td>
                <span v-if="device.is_active" class="devices__active">active</span>
                <span v-else class="devices__not-active">not active</span>
            </td>
        </tr>

    </tbody>
</table>
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