import { combineReducers } from 'redux'
import { infoSlice } from './info'
import { phishingSlice } from './phishing'
import { userSlice } from './user'

const reducer = combineReducers({
  info: infoSlice.reducer,
  user: userSlice.reducer,
  phishing: phishingSlice.reducer
})

export default reducer
