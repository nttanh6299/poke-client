import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  borderRadius: 4,
  transitionTiming: 0.25,
  gutter: 16,
  boxShadow: 'rgba(0, 0, 0, 0.1)',
  palette: {
    common: {
      black: '#333',
      gray: '#f8f8f8',
      white: '#fff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#fff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#fff',
    },
  },
}
