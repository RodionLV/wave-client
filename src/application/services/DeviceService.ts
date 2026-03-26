import { Device } from "@app/entities/Device"
import type { IDeviceRepository } from "@app/repositories"
import type { Hostname } from "@app/entities/valueObjects/Hostname";
import type { ActiveFilter } from "@app/types";
import type { ErrorData } from "@app/entities/ErrorData";
import type { Result } from "@/utils/Result"
import type { IDeviceService } from ".";


export class DeviceService implements IDeviceService {
    private device_repo: IDeviceRepository

    constructor(device_repo: IDeviceRepository) {
        this.device_repo = device_repo
    }

    getListDevices(hostname: Hostname, active: ActiveFilter): Promise<Result<{ items: Device[] }, ErrorData>> {
        return this.device_repo.getListDevices({ hostname, active })
    }

    saveDevice(device: Device): Promise<Result<{ message: string, item: Device}, ErrorData>> {
        return this.device_repo.saveDevice(device)
    }

    updateDevice(device: Device): Promise<Result<{ message: string, item: Device}, ErrorData>> {
        return this.device_repo.updateDevice(device)
    }
}