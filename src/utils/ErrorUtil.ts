export function formatError(err: any): string {
    return (
        err?.response?.data?.message || 
        err?.response?.data?.error ||
        err?.cause?.message || 
        err?.message || 
        "Unknown Error"
    )
}