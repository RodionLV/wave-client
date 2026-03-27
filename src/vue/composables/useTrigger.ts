import { ref, readonly, type DeepReadonly, type Ref } from "vue"

export default function useTrigger(): {trigger: DeepReadonly<Ref<boolean>>, update: ()=>void} {
  let trigger = ref(false)

  return {
    trigger: readonly(trigger),
    update: () => trigger.value = !trigger.value
  }
}