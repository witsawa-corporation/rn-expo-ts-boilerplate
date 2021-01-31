import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      dark: string
      white: string
      primary: string
      secondary: string
      info: string
      danger: string
      warning: strinng
      success: string
    }
  }
}
