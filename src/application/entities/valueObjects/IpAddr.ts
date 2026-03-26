
export class IpAddr {
    private value: string

    constructor(ip: string) {
        let octets = ip.split(".")
        if(octets.length != 4) {
            throw new Error("Invalid ip address")
        } 
        for(let o of octets) {
            if(0 <= Number(0) && Number(o) <= 255) {
                continue
            }
            throw new Error("Invalid ip address")
        }

        this.value = ip
    }

    getValue(): string {
        return this.value
    }
}