import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../store/store'
import { getStoreItem, setStoreItem } from '@/helper'

export interface ToogleReducer {
  status: string
}

const initialState: ToogleReducer = {
  status: '',
}

export const toogleReducer = createSlice({
  name: 'toogle',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    increment: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
  },
})

export const { increment } = toogleReducer.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToogle = (state: RootState): string => state.toogle.status

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

const valueTheme = getStoreItem('theme') || selectToogle

export const getTheme =
  (event: string): AppThunk =>
  (dispatch) => {
    if (event) {
      if (valueTheme === 'light') {
        document.documentElement.classList.remove('light')
        // Whenever the user explicitly chooses light mode
        setStoreItem('theme', 'dark')
        dispatch(increment('dark'))
        location.reload()
      } else {
        document.documentElement.classList.remove('dark')
        // Whenever the user explicitly chooses light mode
        setStoreItem('theme', 'light')
        dispatch(increment('light'))
        location.reload()
      }
    } else {
      // Whenever the user explicitly chooses light mode
      setStoreItem('theme', 'light')
      dispatch(increment('light'))
    }
  }

export default toogleReducer.reducer
