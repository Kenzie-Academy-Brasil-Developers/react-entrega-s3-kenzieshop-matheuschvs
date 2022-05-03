import { extendTheme } from "@chakra-ui/react";

export const light = extendTheme({
  colors: {
    primary: {
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