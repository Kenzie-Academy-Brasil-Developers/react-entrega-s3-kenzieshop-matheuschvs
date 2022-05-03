import { extendTheme } from "@chakra-ui/react";

const light = extendTheme({
  colors: {
    primary: {
      0: '#FFFFFF',
      100: '#D3F3F3',
      200: '#9DDBDB',
      400: '#6BBCBC',
      500: '#429898',
      900: '#288383',
    },
    secondary: {
      100: '#FFDDDD',
      200: '#FFB7B7',
      400: '#FF9191',
      500: '#FD6D6D',
      900: '#DA4343',
    },
    tertiary: {
      100: '#FFF4DD',
      200: '#FFE7B7',
      400: '#FFDA91',
      500: '#FDCD6D',
      900: '#DAA843',
    },
  }
})

const dark = extendTheme({
  colors: {
    primary: {
      900: '#D3F3F3',
      500: '#9DDBDB',
      400: '#6BBCBC',
      200: '#429898',
      100: '#288383',
      0: '#012424',
    },
    secondary: {
      900: '#FFDDDD',
      500: '#FFB7B7',
      400: '#FF9191',
      200: '#FD6D6D',
      100: '#DA4343',
    },
    tertiary: {
      900: '#FFF4DD',
      500: '#FFE7B7',
      400: '#FFDA91',
      200: '#FDCD6D',
      100: '#DAA843',
    },
  }
})

export const themes = { light, dark }
