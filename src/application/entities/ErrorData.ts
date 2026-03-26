
export interface IErrorData {
    kind: string,
    error: string
    status?: number
}

export class ErrorData implements IErrorData{
    public kind: string
    public error: string
    public status?: number

    constructor(kind: string, error: string, status: number | undefined = undefined) {
        this.kind = kind
        this.error = error
        this.status = status
    }
}