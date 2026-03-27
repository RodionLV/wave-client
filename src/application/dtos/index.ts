import type { Hostname } from "@app/entities/valueObjects/Hostname"
import type { ActiveFilter } from "@app/types"

export interface ICreateDevice {
    hostname: string,
    ip: string,
    location: string
}

export interface IUpdateDevice extends ICreateDevice{
    id: number
}

export interface IDeviceItem extends IUpdateDevice {
    is_active: boolean
}

export interface FilterDevices {
    hostname: Hostname,
    active: ActiveFilter
}