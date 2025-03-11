import { createSlice } from '@reduxjs/toolkit'
import { getInitialState } from './initialState'
import reducers from './reducers'
import { fetchAllPhishingsThunk } from './thunk'

const slice = createSlice({
  name: 'phishing',
  initialState: getInitialState(),
  reducers,
  extraReducers: builder => {
    builder
    .addCase(fetchAllPhishingsThunk.fulfilled, (state, action) => {
      state.phishingAttempts = action.payload;
    })
  }
})

export default slice
