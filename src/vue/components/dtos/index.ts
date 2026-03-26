export interface ICreateDevice {
    hostname: string,
    ip: string,
    location: string
}

export interface IUpdateDevice extends ICreateDevice{
    id: number
}