import { Action } from '@reduxjs/toolkit'

export enum SHARED_ACTIONS {

}

export const sharedReducer = (state = {}, action: Action<SHARED_ACTIONS>) => {
  switch (action.type) {
    default:
      return state
  }
}
