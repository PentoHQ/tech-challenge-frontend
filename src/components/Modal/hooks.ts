import { useEffect } from 'react'

export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  callback: (this: Document, ev: DocumentEventMap[K]) => any,
  enabled: boolean = true,
) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    document.addEventListener(eventName, callback)

    return () => {
      document.removeEventListener(eventName, callback)
    }
  }, [eventName, callback, enabled])
}
