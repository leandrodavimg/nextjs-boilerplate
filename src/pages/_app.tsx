/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Minha página</title>
        <link rel="shortcut icon" href="/img/512.png" />
        <link rel="apple-touch-icon" href="/img/512.png" />
        <meta name="description" content="breve descricao" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&family=Passions+Conflict&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
