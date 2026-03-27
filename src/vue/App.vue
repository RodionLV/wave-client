<script setup lang="ts">
import Page from './components/common/Page.vue';
import DeviceList from './components/device/DeviceList.vue';
import DeviceForm from './components/device/DeviceForm.vue';
import FormCover from './components/common/FormCover.vue';
import DeviceFilter from './components/device/DeviceFilter.vue';
import Card from './components/common/Card.vue';
import { UiSeparator, UiButton } from '@ui/index';

import type { IDevice } from '@app/entities/Device';
import { ref } from "vue"
import { DefautlDependency } from '@app/dependencies/DefaultDependency';
import { useGetListDevices } from './app/useGetListDevices';
import { useUpdateDevice } from './app/useUpdateDevice';
import { useCreateDevice } from './app/useCreateDevice';

const dependencies = new DefautlDependency()
const devicesService = dependencies.createService()

const { items, state: getListState, filter, updateGetList } = useGetListDevices(devicesService)
const { saveDevice, state: saveDeviceState } = useCreateDevice(devicesService)
const { updateDevice, state: updateDeviceState } = useUpdateDevice(devicesService)

let showCreateFormFlag = ref(false) 
let showUpdateFormFlag = ref(false) 

const mixinDevice = {
  id: 0,
  hostname: "",
  ip: "",
  location: "",
}

let device = ref(Object.assign({}, mixinDevice))
let message = ref("")

const toggleShowCreateForm = () => showCreateFormFlag.value = !showCreateFormFlag.value
const toggleShowUpdateForm = () => showUpdateFormFlag.value = !showUpdateFormFlag.value

const showEditForm = (dev: IDevice) => {
  toggleShowUpdateForm()

  device.value = {
    id: dev.id || 0,
    hostname: dev.hostname.getValue(),
    location: dev.location,
    ip: dev.ip.getValue()
  }
}

const submitCreateDevice = async () => {
  let res = await saveDevice(device.value)
  if(res != undefined) {
    device.value = Object.assign({}, mixinDevice)
    message.value = res.message
    updateGetList()
  }
}

const submitUpdateDevice = async () => {
  let res = await updateDevice(device.value)
  if(res != undefined) {
    message.value = res.message
    updateGetList()
  }
}

const onCancel = () => {
  device.value = Object.assign({}, mixinDevice)
  showCreateFormFlag.value = false
  showUpdateFormFlag.value = false
  message.value = ""
}
</script>

<template>
<main class="wrapper">
  <page>
    <card class="f-col">
      <div class="error">{{ getListState.error }}</div>

      <device-filter 
        :show-create-form="toggleShowCreateForm" 
        v-model:active-state="filter.activeState" 
        v-model:search="filter.hostname"
      />

      <ui-separator class="separator"/>

      <device-list :show-edit-form="showEditForm" :items="items"/>
    </card>

    <form-cover :show="showCreateFormFlag">
      <device-form v-model:device="device" title="Create device" :info="message || saveDeviceState.error">
        <template #actions>
          <ui-button type="secondary" @click="onCancel">Cancel</ui-button>
          <ui-button @click="submitCreateDevice">Create</ui-button>
        </template>
      </device-form>
    </form-cover>

    <form-cover :show="showUpdateFormFlag">
      <device-form v-model:device="device" :title="`Update device with id: ${device.id}`" :info="message || updateDeviceState.error">
        <template #actions>
          <ui-button type="secondary" @click="onCancel">Cancel</ui-button>
          <ui-button @click="submitUpdateDevice">Update</ui-button>
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

.error{
  height: 1em;
  font-size: 0.9em;
  color: rgba(240, 1, 1, 0.712);
  margin-bottom: 0.5em;
}
</style>
