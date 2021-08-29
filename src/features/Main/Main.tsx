import React, { useEffect, Suspense, lazy } from 'react'
import { useSelector, useDispatch } from 'app/hook'
import { getPokemons } from 'features/Main/slice/thunk'
import { setLimit } from 'features/Main/slice/reducer'
import Container from 'components/Container'
import Flex from 'components/Flex'
import Box from 'components/Box'
import Typography from 'components/Typography'
import Button from './components/Navbar/components/Button'
import StickyWrapper from './components/StickyWrapper'

const PokeList = lazy(() => import('./components/PokeList'))

const Main: React.FC = () => {
  const { entities, status, offset, limit } = useSelector(
    (state) => state.pokemon,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'ready') {
      dispatch(
        getPokemons(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        ),
      )
    }
  }, [limit, offset, status, dispatch])

  const handleLoadmore = () => {
    dispatch(setLimit())
  }

  return (
    <Container>
      <StickyWrapper>
        <Box marginTop={1} marginBottom={1}>
          <Button
            color="#333"
            label="Load more"
            onClick={handleLoadmore}
            loading={status === 'pending'}
          />
        </Box>
      </StickyWrapper>
      <Box marginTop={2} marginBottom={2}>
        <Flex>
          <Flex flexItem>
            <Suspense
              fallback={
                <Typography variant="h2" color="#333">
                  Loading
                </Typography>
              }
            >
              <PokeList pokemonList={entities} />
            </Suspense>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default Main
