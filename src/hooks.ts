import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'

export const useBodyScrollLock = (): [boolean, React.Dispatch<boolean>] => {
  const bodyStyle = document.body.style
  const [bodyScrollLock, setBodyScrollLock] = React.useState(bodyStyle.overflowY === 'hidden')

  React.useEffect(() => {
    document.body.style.overflow = bodyScrollLock ? 'hidden' : 'auto'
  }, [bodyScrollLock, bodyStyle])

  return [bodyScrollLock, setBodyScrollLock]
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener)
    } else {
      media.addListener(listener)
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [matches, query])

  return matches
}

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void
export const useDebounce = <Func extends SomeFunction>(
  func: Func,
  delay = 1000
): Func => {
  const timer = React.useRef<Timer>()

  React.useEffect(() => {
    return () => {
      if (!timer.current) return
      clearTimeout(timer.current)
    }
  }, [])

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer.current)
    timer.current = newTimer
  }) as Func

  return debouncedFunction
}

export const useIsSmall = () => useMediaQuery('(min-width: 480px)')
export const useIsMedium = () => useMediaQuery('(min-width: 768px)')

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
