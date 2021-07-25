import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <Head>
        <title>Marsden Jacques</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>)
}

export default MyApp
