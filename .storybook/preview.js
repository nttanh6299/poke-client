import React from 'react'
import { GlobalStyle } from 'styles/global'

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyle />
      <Story />
    </div>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
