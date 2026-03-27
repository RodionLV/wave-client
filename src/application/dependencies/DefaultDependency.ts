import type { Axios } from "axios";
import type { IDeviceRepository } from "@app/repositories";
import type { IDeviceService } from "@app/services";

import { client } from "@app/clients/axios";
import { HttpDeviceRepo } from "@app/adapters/HttpDeviceRepo";
import { DeviceService } from "@app/services/DeviceService";


export class DefautlDependency{
    private client: Axios
    private device_repo: IDeviceRepository

    constructor() {
        this.client = client
        this.device_repo = new HttpDeviceRepo(this.client)
    }

    createService(): IDeviceService {
        return new DeviceService(this.device_repo)
    }
}