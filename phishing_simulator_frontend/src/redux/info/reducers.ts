import { SliceCaseReducers } from '@reduxjs/toolkit'
import { InfoProps } from './types'
import { IAction } from '../store'

const createReducer = <T extends SliceCaseReducers<InfoProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setLoading(state, action: IAction<boolean>) {
    state.isLoading = action.payload
  }
})

export default reducers
