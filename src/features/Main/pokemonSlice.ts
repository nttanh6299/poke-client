import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import client from 'api'
import { pokeTypes } from 'constants/global'

export const getPokemons = createAsyncThunk(
  'pokemon/getPokemons',
  async (url: string) => {
    const response = await client.get<Api.Collection<Model.Pokemon>>(url)

    const promises = response.results.map(({ url }) =>
      client.get<Model.Pokemon>(url),
    )
    const settledResponse = await Promise.allSettled(promises)
    const newResponse: Api.Collection<Model.Pokemon> = {
      ...response,
      results: settledResponse
        .filter((res) => res.status !== 'rejected')
        .map((res) => (res as any).value),
    }

    return newResponse
  },
)

interface PokemonState {
  type: Model.InitialType
  entities: {
    [type: string]: Model.Pokemon[]
  }
  nextUrl: string
  loading: boolean
}

const initialState: PokemonState = {
  type: pokeTypes[0],
  entities: {},
  nextUrl: '',
  loading: false,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    changePokemonType: (state, action: PayloadAction<Model.InitialType>) => {
      state.type = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.loading = false
      state.nextUrl = payload.next ?? ''

      if (state.entities[state.type.name]) {
        state.entities[state.type.name].push(...payload.results)
      } else {
        state.entities[state.type.name] = payload.results
      }
    })
  },
})

export const { changePokemonType } = pokemonSlice.actions

export default pokemonSlice.reducer
