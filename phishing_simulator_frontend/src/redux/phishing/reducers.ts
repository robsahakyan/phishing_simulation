import { SliceCaseReducers } from '@reduxjs/toolkit'
import { PhishingListDto, PhishingProps } from './types'
import { IAction } from '../store'

const createReducer = <T extends SliceCaseReducers<PhishingProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setPhishingAttempts(state, action: IAction<PhishingListDto[]>) {
    state.phishingAttempts = action.payload
  }
})

export default reducers
