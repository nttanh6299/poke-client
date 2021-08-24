import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from 'features/Counter/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
