import React from 'react'
import Container from 'components/Container'
import Navbar from './components/Navbar'
import PokeList from './components/PokeList'
import Flex from 'components/Flex'
import Box from 'components/Box'
import mock from './mock.json'

const Main: React.FC = () => {
  const pokemonList: Model.Pokemon[] = [mock]

  console.log('List: ', pokemonList)

  return (
    <Container>
      <Flex>
        <Navbar />
        <Flex flexItem>
          <Box marginTop={2} marginRight={1}>
            <PokeList pokemonList={pokemonList} />
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Main
