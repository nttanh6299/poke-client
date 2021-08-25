import Button from '../Button'
import { render, screen } from '@testing-library/react'

it('Should render component with initial label', () => {
  render(
    <Button color="red" label="Click" onClick={() => console.log('Test')} />,
  )
  expect(screen.getByTestId('nav-button')).toHaveTextContent('Click')
})
