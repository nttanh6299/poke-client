import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from 'app/store'
import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/theme'

import Navbar from 'components/Navbar'
import Main from 'features/Main'
import Counter from 'features/Counter'
import NotFound from 'features/NotFound'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Helmet>
          <meta
            name="description"
            content="React - RTK - Typescript - Storybook - Testing - PokeAPI"
          />
          <meta name="theme-color" content="#fff" />
        </Helmet>

        <GlobalStyle />

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/counter" component={Counter} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
