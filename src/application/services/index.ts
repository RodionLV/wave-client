import type { Hostname } from '@app/entities/valueObjects/Hostname';
import type { Result } from '@utils/Result'
import type { ActiveFilter } from '@app/types';
import { Device } from '@app/entities/Device';
import { ErrorData } from '@app/entities/ErrorData';

export interface IDeviceService {
    getListDevices(hostname: Hostname, active: ActiveFilter): Promise<Result<{ items: Device[] }, ErrorData>>
    saveDevice(device: Device): Promise<Result<{ message: string, item: Device}, ErrorData>>
    updateDevice(device: Device): Promise<Result<{ message: string, item: Device}, ErrorData>>
}