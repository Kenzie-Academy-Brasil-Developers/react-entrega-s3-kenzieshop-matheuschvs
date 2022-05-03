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
      900: '#058989',
      500: '#064141',
      400: '#064141',
      200: '#052424',
      100: '#010E0E',
      0: '#000202',
    },
    secondary: {
      900: '#E40909',
      500: '#6D0A0A',
      400: '#3C0808',
      200: '#170202',
      100: '#030000',
    },
    tertiary: {
      900: '#E49B09',
      500: '#6D4C0A',
      400: '#3C2B08',
      200: '#171002',
      100: '#030200',
    },
  }
})

export const themes = { light, dark }
