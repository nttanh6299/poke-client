import React from 'react'
import { Helmet } from 'react-helmet'
import Container from 'components/Container'

const Home: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div>Home page</div>
    </Container>
  )
}

export default Home
