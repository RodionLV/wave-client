
export class Hostname{
    private value: string

    constructor(value: string) {
        if (value.length > 70) {
            throw new Error("Invalid length of hostname, should be no more than 70 characters")
        }

        this.value = value
    }

    getValue(): string {
        return this.value
    }
}