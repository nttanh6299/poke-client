import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import Flex from 'components/Flex'
import Box from 'components/Box'
import Stats from '../PokeItem/components/Stats'
import Card from '../PokeItem/components/Card'
import Show from 'components/Show'
import Typography from 'components/Typography'

interface IPokeListProps {
  pokemonList: Model.Pokemon[]
  loading?: boolean
}

const PokeList: React.FC<IPokeListProps> = ({
  pokemonList,
  loading = false,
}) => {
  const history = useHistory()

  const changeRoute = (name: string) => () => {
    history.push('/pokemon/' + name)
  }

  return (
    <Box>
      <Show when={!loading}>
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
                    onClick={changeRoute(name)}
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
      </Show>

      <Show when={loading}>
        <Typography variant="h2" color="#333">
          Loading
        </Typography>
      </Show>
    </Box>
  )
}

export default PokeList
