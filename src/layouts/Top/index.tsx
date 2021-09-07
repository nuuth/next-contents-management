import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import TopLayoutPC from './pc'
import TopLayoutSP from './sp'

import useDevice from 'hooks/useDevice'
import { TopLayoutProps } from 'pages/index'
import { countState } from 'stores/atoms/CommonAtom'

const TopLayout: React.FC<TopLayoutProps> = (props) => {
  const [count, setCount] = useRecoilState(countState)
  const { isSp } = useDevice()

  console.log('再描画 index', count)

  const Layout = isSp ? TopLayoutSP : TopLayoutPC

  return <Layout {...props} />
}

export default TopLayout
