import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store'

const selector = (state: RootState) => state.user

const getCurrentUser = createSelector([selector], state => state.currentUser)

const userSelectorStates = {
  getCurrentUser
}

export default userSelectorStates