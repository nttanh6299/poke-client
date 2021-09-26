import { createAsyncThunk } from '@reduxjs/toolkit'
import client from 'api'
import { RootState } from 'app/store'

export const getPokemonByType = createAsyncThunk<
  Model.RawProp[] | undefined,
  string,
  {
    state: RootState
  }
>('pokemon/getPokemonByType', async (type) => {
  const response = await client.get<Extend.Type>(`/type/${type}`)
  const pokemons = response.pokemon.map((poke) => poke.pokemon)
  return pokemons
})

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
