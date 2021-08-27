import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from 'app/store'
import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/theme'
import Main from 'features/Main'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Main />
      </ThemeProvider>
    </Provider>
  )
}

export default App
