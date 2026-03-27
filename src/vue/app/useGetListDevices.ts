import type { IDeviceService } from "@app/services";
import type { ActiveFilter } from "@app/types"

import useTrigger from '../composables/useTrigger';
import { Device } from "@app/entities/Device";
import { ref, type Ref, watch, reactive } from "vue"
import { debounce } from "@utils/FuncUtil";
import { useAsyncError } from "@v/composables/useError";
import { Hostname } from "@app/entities/valueObjects/Hostname";


export function useGetListDevices(deviceService: IDeviceService) {
    let items = ref<Device[]>([])    

    let filter = reactive<{
        hostname: string,
        activeState: ActiveFilter
    }>({
        hostname: "",
        activeState: "all"
    })

    function getListDevices(hostname: string, activeState: ActiveFilter) {
        return deviceService.getListDevices(new Hostname(hostname), activeState)
    }
    
    const {
        exec: getListItems,
        state
    } = useAsyncError(getListDevices)

    const { trigger, update: updateGetList } = useTrigger()

    let dUpdateGetList = debounce(updateGetList, 600);

    watch(
        () => [ filter.hostname ],
        () => dUpdateGetList()
    )

    watch(
        () => [ trigger.value, filter.activeState ],
        async () => {
            items.value = (await getListItems(filter.hostname, filter.activeState))?.items || []
        },
        { immediate: true }
    )

    return {
        updateGetList,
        items: items as Ref<Device[]>,
        filter,
        state
    }
}