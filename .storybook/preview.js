import React from 'react'
import { GlobalStyle } from 'styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
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
