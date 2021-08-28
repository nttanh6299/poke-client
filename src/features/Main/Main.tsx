import React, { useEffect, Suspense, lazy } from 'react'
import { useSelector, useDispatch } from 'app/hook'
import { changePokemonType, getPokemons } from 'features/Main/pokemonSlice'
import Container from 'components/Container'
import Navbar from './components/Navbar'
import Flex from 'components/Flex'
import Box from 'components/Box'

const PokeList = lazy(() => import('./components/PokeList'))

const Main: React.FC = () => {
  const pokemonType = useSelector((state) => state.pokemon.type)
  const pokemons = useSelector(
    (state) => state.pokemon.entities[pokemonType.name],
  )
  const dispatch = useDispatch()

  console.log('Pokemons', pokemons)

  useEffect(() => {
    console.log('Fetch pokemons: ', pokemonType)
    dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon?limit=4'))
  }, [pokemonType, dispatch])

  return (
    <Container>
      <Flex>
        <Navbar
          currentType={pokemonType}
          onChangeType={(type) => dispatch(changePokemonType(type))}
        />
        <Flex flexItem>
          <Box marginTop={2} marginRight={1}>
            <Suspense fallback={<div>Loading....</div>}>
              <PokeList pokemonList={pokemons} />
            </Suspense>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Main
