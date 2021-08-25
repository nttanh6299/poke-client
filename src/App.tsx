import { Provider } from 'react-redux'
import { store } from 'app/store'
import { GlobalStyle } from 'styles/global'
import Main from 'features/Main'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <Main />
    </Provider>
  )
}

export default App
