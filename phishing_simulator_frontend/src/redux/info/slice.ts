import { createSlice } from '@reduxjs/toolkit'
import { getInitialState } from './initialState'
import reducers from './reducers'
import { ActonForExtraReducers } from '../store'

const slice = createSlice({
  name: 'info',
  initialState: getInitialState(),
  reducers,
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action: ActonForExtraReducers<any>) => {
          if (action?.meta && !action?.meta?.shouldNotLoad) {
            state.isLoading = true;
          }
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false
        }
      )
  }
})

export default slice
