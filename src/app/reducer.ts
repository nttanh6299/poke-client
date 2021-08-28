import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from 'features/Counter/counterSlice'
import pokemonReducer from 'features/Main/pokemonSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  pokemon: pokemonReducer,
})

export default rootReducer
