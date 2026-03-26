import type { ErrorData } from "@app/entities/ErrorData";
import { Device } from "../entities/Device"
import type { FilterDevices } from "@app/dtos";
import type { Result } from "@/utils/Result"

export interface IDeviceRepository {
    getListDevices(filter: FilterDevices): Promise<Result<{items: Device[]}, ErrorData>>
    saveDevice(device: Device): Promise<Result<{message: string, item: Device}, ErrorData>>
    updateDevice(device: Device): Promise<Result<{message: string, item: Device}, ErrorData>>
}