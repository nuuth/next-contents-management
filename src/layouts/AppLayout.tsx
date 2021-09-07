import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import type { AppProps } from 'next/app'

import MainHeader from 'components/header/MainHeader'
import { GlobalProcessState } from 'stores/atoms/CommonAtom'

function AppLayout({ Component, pageProps }: AppProps) {
  const [state, setState] = useRecoilState(GlobalProcessState)

  useEffect(() => {
    // 初回時処理の終了フラグ
    setState({ status: 'finish' })
  }, [])

  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  )
}

export default AppLayout
