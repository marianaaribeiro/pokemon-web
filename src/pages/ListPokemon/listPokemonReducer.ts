import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../store/store'
import { getStoreItem, setStoreItem } from '@/helper'
import { Pokemon } from '@/services/types'
import { useApps } from '@/contexts/AppsContext'

export interface ListPokemonReducer {
  value: Pokemon
}

const initialState: ListPokemonReducer = {
  value: {},
}

export const listPokemonReducer = createSlice({
  name: 'itemsPokemon',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    increment: (state, action: PayloadAction<Pokemon>) => {
      state.value = action.payload
    },
  },
})

export const { increment } = listPokemonReducer.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectList = (state: RootState): Pokemon =>
  state.itemsPokemon.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export const pokemonList =
  (value: Pokemon): AppThunk =>
  (dispatch) => {
    if (value) {
      dispatch(increment(value))
      const item = JSON.stringify(value)
      setStoreItem('list', `${item}`)
    }
  }

export default listPokemonReducer.reducer
