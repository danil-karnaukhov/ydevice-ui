import type { Ref } from 'react'

export const mergeRefs = <TElement>(...refs: (Ref<TElement> | undefined)[]) => {
  return (element: TElement | null) => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(element)
        return
      }

      ref.current = element
    })
  }
}
