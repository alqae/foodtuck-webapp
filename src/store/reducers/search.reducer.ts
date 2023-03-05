import { createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '../../models'

interface SearchState {
  search: string
  hits: Product[]
  car: Product[]
  loading: boolean
  error: string
}

const initialState: SearchState = {
  search: '',
  hits: [],
  car: [],
  loading: false,
  error: '',
}

export enum SearchActionTypes {
  setSearch = 'search/setSearch',
  setHits = 'search/setHits',
  setLoading = 'search/setLoading',
  setError = 'search/setError',
  addToCar = 'search/addToCar',
  removeFromCar = 'search/removeFromCar',
  clearCar = 'search/clearCar',
}

export const Search = createAsyncThunk(
  SearchActionTypes.setSearch,
  async (variables: Partial<{
    query?: string
    maxPrice?: number
    minPrice?: number
    categories?: (string | undefined)[] | undefined
    tags?: (string | undefined)[] | undefined
  }>, { dispatch }) => {
    dispatch({ type: SearchActionTypes.setLoading, payload: true })

    try {
      const products = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Search(
              $name: String,
              $maxPrice: Float,
              $minPrice: Float,
              $categories: [String!],
              $tags: [String!],
            ) {
              search(
                name: $name,
                categories: $categories,
                tags: $tags,
                maxPrice: $maxPrice,
                minPrice: $minPrice,
              ) {
                id
                name
                description
                price
                image
                rating
                stock
                quantity
              }
            }
          `,
          variables,
        }),
      }).then((res) => res.json())

      dispatch({ type: SearchActionTypes.setHits, payload: products.data?.search })
      dispatch({ type: SearchActionTypes.setLoading, payload: false })
    } catch (error) {
      console.warn('error', error);
      dispatch({ type: SearchActionTypes.setError, payload: error })
    }
  }
)

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SearchActionTypes.setSearch:
      return { ...state, search: action.payload }
    case SearchActionTypes.setHits:
      return { ...state, hits: action.payload }
    case SearchActionTypes.setLoading:
      return { ...state, loading: action.payload }
    case SearchActionTypes.setError:
      return { ...state, error: action.payload }
    case SearchActionTypes.addToCar:
      return { ...state, car: [...state.car, action.payload] }
    case SearchActionTypes.removeFromCar:
      return { ...state, car: state.car.filter((item) => item.id !== action.payload.id) }
    case SearchActionTypes.clearCar:
      return { ...state, car: [] }
    default:
      return state
  }
}
