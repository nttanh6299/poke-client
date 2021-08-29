import { Helmet } from 'react-helmet'
import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'components/Container'
import formatName from 'utils/formatName'

interface IParams {
  pokemonId: string
}

const PokemonDetail: React.FC = () => {
  const { pokemonId } = useParams<IParams>()
  const pokemonName = formatName(pokemonId)

  return (
    <Container>
      <Helmet>
        <title>{pokemonName}</title>
      </Helmet>

      <div>Pokemon Detail: {pokemonName}</div>
    </Container>
  )
}

export default PokemonDetail
