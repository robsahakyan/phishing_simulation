import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store'

const selector = (state: RootState) => state.info

const getLoading = createSelector([selector], state => state.isLoading)

const infoSelectorStates = {
  getLoading
}

export default infoSelectorStates
