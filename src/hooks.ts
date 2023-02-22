import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'

export const useBodyScrollLock = (): [boolean, React.Dispatch<boolean>] => {
  const bodyStyle = document.body.style
  const [bodyScrollLock, setBodyScrollLock] = React.useState(bodyStyle.overflowY == 'hidden')

  React.useEffect(() => {
    document.body.style.overflow = bodyScrollLock ? 'hidden' : 'auto'
  }, [bodyScrollLock, bodyStyle])

  return [bodyScrollLock, setBodyScrollLock]
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
