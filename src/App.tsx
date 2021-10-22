import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from 'app/store'
import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/theme'

import Navbar from 'components/Navbar'
import ErrorBoundary from 'components/ErrorBoundary'

import Home from 'features/Home'
import Pokemon from 'features/Pokemon'
import PokemonDetail from 'features/PokemonDetail'
import Counter from 'features/Counter'
import NotFound from 'features/NotFound'
import ErrorPage from 'features/Error'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Helmet>
          <meta
            name="description"
            content="React - RTK - Typescript - Storybook - Testing - PokeAPI"
          />
          <meta name="theme-color" content="#f00" />
        </Helmet>

        <GlobalStyle />

        <BrowserRouter basename="/">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemon} />
            <Route exact path="/pokemon/:pokemonId" component={PokemonDetail} />
            <Route exact path="/counter" component={Counter} />

            <ErrorBoundary>
              <Route exact path="/error" component={ErrorPage} />
            </ErrorBoundary>

            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
