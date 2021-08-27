interface IPalette {
  main: string
  contrastText: string
}

export interface ThemeInterface {
  borderRadius: number
  transitionTiming: number
  gutter: number
  boxShadow: string
  palette: {
    common: {
      black: string
      gray: string
      white: string
    }
    primary: IPalette
    secondary: IPalette
  }
}

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
