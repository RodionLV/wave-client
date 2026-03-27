import { ErrorData } from "@app/entities/ErrorData"

import { reactive, readonly } from 'vue';
import { isError, type Result } from "@utils/Result"
import { formatError } from "@utils/ErrorUtil"


export function useAsyncError<Ok>(cb: (...args: any[])=>Promise<Result<Ok, ErrorData>>) {
    const state = reactive<{
        error: string,
        isError: boolean
    }>({
        error: "",
        isError: false
    })

    const exec = async function(...args: any[]): Promise<Ok | undefined> {
        try{
            let res = await cb(...args)
            if(isError(res)) {
                state.error = res.error.error
                state.isError = true
                return
            }

            state.error = ""
            state.isError = false

            return res.data
        } catch(e) {
            console.error(e)
            state.error = formatError(e)
            state.isError = true
        }
    }

    return {
        state: readonly(state),
        exec
    }
}