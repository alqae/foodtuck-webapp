interface AuthState {
  token?: string
}

export enum AuthActions {
  setToken = 'auth/setToken',
  clearToken = 'auth/clearToken',
}

const initialState = { } as AuthState

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AuthActions.setToken:
      localStorage.setItem('token', action.payload)
      return { ...state, token: action.payload }
    case AuthActions.clearToken:
      localStorage.removeItem('token')
      return { ...state, token: null }
    default:
      return state
  }
}
