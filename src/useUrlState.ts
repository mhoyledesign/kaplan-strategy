import { useCallback } from 'react'

export function getParam(key: string): string | null {
  return new URLSearchParams(window.location.search).get(key)
}

export function setParams(params: Record<string, string | null | undefined>) {
  const url = new URL(window.location.href)
  for (const [k, v] of Object.entries(params)) {
    if (v == null || v === '') {
      url.searchParams.delete(k)
    } else {
      url.searchParams.set(k, v)
    }
  }
  window.history.pushState({}, '', url.toString())
}

export function clearParams(keep: string[] = []) {
  const url = new URL(window.location.href)
  const keysToDelete: string[] = []
  url.searchParams.forEach((_, k) => {
    if (!keep.includes(k)) keysToDelete.push(k)
  })
  keysToDelete.forEach(k => url.searchParams.delete(k))
  window.history.pushState({}, '', url.toString())
}

export function useUrlParams() {
  const update = useCallback((params: Record<string, string | null | undefined>) => {
    setParams(params)
  }, [])
  return update
}
