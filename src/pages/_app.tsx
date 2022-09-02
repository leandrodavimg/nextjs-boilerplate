/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minha página</title>
        <link rel="shortcut icon" href="/img/512.png" />
        <link rel="apple-touch-icon" href="/img/512.png" />
        <meta name="description" content="breve descricao" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
