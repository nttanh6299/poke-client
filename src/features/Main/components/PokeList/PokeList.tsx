import React, { Fragment } from 'react'
import Flex from 'components/Flex'
import Box from 'components/Box'
import Stats from '../PokeItem/components/Stats'
import Card from '../PokeItem/components/Card'
import Show from 'components/Show'

interface IPokeListProps {
  pokemonList: Model.Pokemon[]
}

const PokeList: React.FC<IPokeListProps> = ({ pokemonList }) => {
  return (
    <Box>
      {pokemonList?.map(
        (
          { id, weight, height, name, stats, types, abilities, sprites },
          index,
        ) => (
          <Fragment key={id}>
            <Flex>
              <Flex flexItem>
                <Card
                  id={id}
                  weight={weight}
                  height={height}
                  name={name}
                  avatar={
                    sprites.other?.['official-artwork']?.front_default ?? ''
                  }
                  types={types.map(({ type }) => type.name)}
                  abilities={abilities.map(({ ability }) => ability.name)}
                />
              </Flex>
              <Flex flexItem>
                <Stats stats={stats} />
              </Flex>
            </Flex>
            <Show when={index !== pokemonList?.length - 1}>
              <Box marginBottom={3} />
            </Show>
          </Fragment>
        ),
      )}
    </Box>
  )
}

export default PokeList
