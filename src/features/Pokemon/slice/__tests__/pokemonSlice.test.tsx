import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'
import { store } from 'app/store'
import reducer, { setLimit, initialState } from '../reducer'
import Main from 'features/Pokemon'

afterEach(cleanup)

it('Should return the initial state', () => {
  expect(reducer(undefined, {} as any)).toEqual(initialState)
})

it('Should generate new random pagination', () => {
  const initialPokemonState = reducer(undefined, {} as any)

  store.dispatch(setLimit())
  const newPokemonState = store.getState().pokemon

  expect(newPokemonState.limit).not.toEqual(initialPokemonState.limit)
  expect(newPokemonState.offset).not.toEqual(initialPokemonState.offset)
})

it('Load more action', async () => {
  const initialState = reducer(undefined, {} as any)

  render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    </Provider>,
  )

  const loadMoreButton = screen.getByTestId('nav-button')
  expect(loadMoreButton).toBeInTheDocument()

  fireEvent.click(loadMoreButton)
  expect(loadMoreButton.textContent).toEqual('LOADING')

  await waitFor(() => screen.getByText(/load more/i), { timeout: 10000 })
  expect(initialState.limit).not.toEqual(store.getState().pokemon.limit)
})
