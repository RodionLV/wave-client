export const assignNoExtend = (obj1: any, obj2: any) => {
    if(obj1 instanceof Object && obj2 instanceof Object) {
        if(obj1 !== null && obj2 !== null) {
            for(let key in obj1) {
                if(obj2[key] !== undefined) {
                    obj1[key] = obj2[key]
                }
            }
        }
    }

    return obj1
}