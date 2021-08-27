// import '../styles/globals.css'
import 'bulma'
import type { AppProps } from 'next/app'

import MainHeader from 'components/header/MainHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
