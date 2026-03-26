<script setup lang="ts">
import Page from './components/common/Page.vue';
import DeviceList from './components/device/DeviceList.vue';
import DeviceForm from './components/device/DeviceForm.vue';
import FormCover from './components/common/FormCover.vue';
import DeviceFilter from './components/device/DeviceFilter.vue';
import Card from './components/common/Card.vue';
import { UiSeparator, UiButton } from '@ui/index';

import { reactive, ref } from "vue"
import type { ICreateDevice, IUpdateDevice } from './components/dtos';

let showCreateFormFlag = ref(false) 
let showUpdateFormFlag = ref(false) 

const deviceMixin = {
  id: 0,
  hostname: "",
  ip: "",
  location: "",
}

let device = reactive({
  id: 0,
  hostname: "",
  ip: "",
  location: "",
})

const toggleShowCreateForm = () => showCreateFormFlag.value = !showCreateFormFlag.value
const toggleShowUpdateForm = () => showUpdateFormFlag.value = !showUpdateFormFlag.value

const showEditForm = () => {
  toggleShowUpdateForm()
}
// const createAction = (_e, device: ICreateDevice) => {
// }

// const editAction = (_e, device: IUpdateDevice) => {
// }

</script>

<template>
<main class="wrapper">
  <page>
    <card class="f-col">
      <device-filter :show-create-form="toggleShowCreateForm"/>

      <ui-separator class="separator"/>

      <device-list :show-edit-form="showEditForm"/>
    </card>

    <form-cover :show="showCreateFormFlag">
      <device-form :device="device" title="Create device">
        <template #actions>
          <ui-button type="secondary" @click="toggleShowCreateForm">Cancel</ui-button>
          <ui-button>Create</ui-button>
        </template>
      </device-form>
    </form-cover>

    <form-cover :show="showUpdateFormFlag">
      <device-form :device="device" :title="`Update device with id: ${device.id}`">
        <template #actions>
          <ui-button type="secondary" @click="toggleShowUpdateForm">Cancel</ui-button>
          <ui-button>Update</ui-button>
        </template>
      </device-form>
    </form-cover>
  </page>
</main>
</template>

<style scoped>
.separator{
  margin: 1em 0;
}
</style>
