import { Hostname } from './valueObjects/Hostname';
import { IpAddr } from './valueObjects/IpAddr';

export interface DeviceData {
    id?: number,
    hostname: string,
    location: string,
    ip: string,
    is_active?: boolean
}

export interface IDevice {
    id?: number,
    hostname: Hostname,
    location: string,
    ip: IpAddr,
    is_active?: boolean
}

export class Device implements IDevice {
    id: number
    hostname: Hostname
    location: string
    ip: IpAddr
    is_active: boolean
    
    constructor({id, hostname, location, ip, is_active}: DeviceData) {
        this.id = id || 0
        this.hostname = new Hostname(hostname)
        this.location = location
        this.ip = new IpAddr(ip)
        this.is_active = is_active || false
    }
}