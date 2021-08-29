import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'
import { render, screen, cleanup } from '@testing-library/react'
import Button from '../Button'

afterEach(cleanup)

it('Should render component with initial label', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button color="red" label="Click" onClick={() => console.log('Test')} />
    </ThemeProvider>,
  )
  expect(screen.getByTestId('nav-button')).toHaveTextContent('Click')
})
