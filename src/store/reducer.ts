import { combineReducers } from 'redux'
import characterReducer from './character'

export default combineReducers({
  character: characterReducer,
})
