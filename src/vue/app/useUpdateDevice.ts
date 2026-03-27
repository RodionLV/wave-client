import type { IUpdateDevice } from "@app/dtos";
import { Device } from "@app/entities/Device";
import type { IDeviceService } from "@app/services";
import { useAsyncError } from "@v/composables/useError";


export function useUpdateDevice(deviceService: IDeviceService) {
    function updateDevice(device: IUpdateDevice) {
        const newDevice = new Device({
            id: device.id,
            location: device.location,
            ip: device.ip,
            hostname: device.hostname
        })

        return deviceService.updateDevice(newDevice)
    }

    const {
        exec,
        state
    } = useAsyncError(updateDevice)

    return {
        updateDevice: exec,
        state
    }
}