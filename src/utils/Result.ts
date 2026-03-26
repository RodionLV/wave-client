export type Result<Ok, Err> = { type: "ok", data: Ok } | { type: "err", error: Err }

export function Ok<Ok, Err>(data: Ok): Result<Ok, Err> {
    return { type: "ok", data: data }
}
export function Err<Ok, Err>(err: Err): Result<Ok, Err> {
    return { type: "err", error: err }
}

export function isError<Ok, Err>(res: Result<Ok, Err>): res is { type: "err", error: Err} {
    return res.type === "err"
}