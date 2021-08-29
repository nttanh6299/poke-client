import { createSlice } from '@reduxjs/toolkit'
import random from 'utils/random'
import { getPokemons } from './thunk'

interface PokemonState {
  totalResults: number
  entities: Model.Pokemon[]
  status: 'idle' | 'ready' | 'pending'
  limit: number
  offset: number
}

export const initialState: PokemonState = {
  totalResults: 0,
  entities: [],
  status: 'ready',
  limit: 4,
  offset: 0,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLimit: (state) => {
      state.limit = random(5, 10)
      state.offset = random(1, state.totalResults)
      state.status = 'ready'
    },
  },
  extraReducers: (builder) => {
    // getPokemons
    builder.addCase(getPokemons.pending, (state) => {
      state.status = 'pending'
    })

    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.status = 'idle'
      state.totalResults = payload.count
      if (state.entities) {
        state.entities.push(...payload.results)
      } else {
        state.entities = payload.results
      }
    })
  },
})

export const { setLimit } = pokemonSlice.actions

export default pokemonSlice.reducer
