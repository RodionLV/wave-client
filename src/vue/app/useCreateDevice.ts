import type { ICreateDevice } from "@app/dtos";
import { Device } from "@app/entities/Device";
import type { IDeviceService } from "@app/services";
import { useAsyncError } from "@v/composables/useError";


export function useCreateDevice(deviceService: IDeviceService) {
    function saveDevice(device: ICreateDevice) {
        const newDevice = new Device({
            location: device.location,
            ip: device.ip,
            hostname: device.hostname
        })

        return deviceService.saveDevice(newDevice)
    }

    const {
        exec,
        state
    } = useAsyncError(saveDevice)

    return {
        saveDevice: exec,
        state
    }
}