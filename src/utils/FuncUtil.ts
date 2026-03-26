export const debounce = (exec: (...args: any[])=>any, msecs: number) => {
  let id: number | null = null;

  return function (...args: any[]) {
    if(id != null) {
      clearTimeout(id)
    }
    id = setTimeout(()=>exec(...args), msecs)
  }
}