import { Device, type DeviceData } from "@app/entities/Device";
import { ErrorData } from "@app/entities/ErrorData";
import type { IDeviceRepository } from "@app/repositories";
import { formatError } from "@utils/ErrorUtil";
import { Ok, Err, type Result } from "@utils/Result";
import type { Axios, AxiosError } from "axios";
import type { FilterDevices } from '@app/dtos';


export class HttpDeviceRepo implements IDeviceRepository {
    private client: Axios 

    constructor(client: Axios) {
        this.client = client
    }

    async getListDevices(filter: FilterDevices): Promise<Result<{items: Device[]}, ErrorData>> {
        try{
            const { data } = await this.client.get<{items: DeviceData[]}>(`/devices`, {
                params: {
                    hostname: filter.hostname.getValue(),
                    active: filter.active
                }
            })

            return Ok({ items: data.items.map(data => new Device(data)) })
        } catch(e) {
            return Err(this.handleErrors(e))
        }
    }

    async saveDevice(device: Device): Promise<Result<{ message: string; item: Device; }, ErrorData>> {
        try {
            const { data } = await this.client.post<{ message: string, item: DeviceData }>(`/devices`, {
                    hostname: device.hostname.getValue(),
                    location: device.location,
                    ip: device.ip.getValue()
                })

            return Ok({ message: data.message, item: new Device(data.item) })
        } catch(e) {
            return Err(this.handleErrors(e))
        }
    }

    async updateDevice(device: Device): Promise<Result<{ message: string; item: Device; }, ErrorData>> {
        try {
            const { data } = await this.client.put<{ message: string, item: DeviceData }>(`/devices/${device.id}`, {
                    hostname: device.hostname.getValue(),
                    location: device.location,
                    ip: device.ip.getValue()
                })

            return Ok({ message: data.message, item: new Device(data.item) })
        } catch(e) {
            return Err(this.handleErrors(e))
        }
    }

    handleErrors(error: AxiosError | any): ErrorData {
        if(error.response) {
            const axiosError = error as AxiosError
            if(axiosError.response && axiosError.response.status >= 500) {
                return new ErrorData("Server Error", formatError(axiosError), axiosError.response.status)
            }

            if(axiosError.response && axiosError.response.status == 400) {
                return new ErrorData("Bad Request", formatError(axiosError), axiosError.response.status)
            }

            if(axiosError.response) {
                return new ErrorData("Unexpected Error Response", formatError(axiosError), axiosError.response.status)
            }

            if(axiosError.request) {
                return new ErrorData("Unexpected Error Request", formatError(axiosError))
            }
        }

        return new ErrorData("Unexpected Error", formatError(error))
    }
}