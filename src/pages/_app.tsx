// import '../styles/globals.css'
import 'bulma'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import AppLayout from 'layouts/AppLayout'

function MyApp(props: AppProps) {
  return (
    <>
      <RecoilRoot>
        <AppLayout {...props} />
      </RecoilRoot>
    </>
  )
}
export default MyApp
