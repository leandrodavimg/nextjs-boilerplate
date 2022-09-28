// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`
  }
}

const colors = {
  colors: {
    cutom: {
      100: '#d39ce6',
      200: '#ca84e3',
      300: '#bf63e0',
      400: '#b143d9',
      500: '#b12de0',
      600: '#a80be0', // this is default color
      700: '#9508c7',
      800: '#7e08a8',
      900: '#5e077d'
    }
  }
}

// 3. extend the theme
const theme = extendTheme({
  config,
  ...fonts,
  ...colors
})

export default theme
