import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store'

const selector = (state: RootState) => state.phishing

const phishingAttempts = createSelector([selector], state => state.phishingAttempts);

const phishingSelectorStates = {
  phishingAttempts
}

export default phishingSelectorStates
