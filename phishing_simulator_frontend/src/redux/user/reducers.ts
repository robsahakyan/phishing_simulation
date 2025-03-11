import { SliceCaseReducers } from '@reduxjs/toolkit'
import { UsersProps } from './types'

const createReducer = <T extends SliceCaseReducers<UsersProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({})

export default reducers
