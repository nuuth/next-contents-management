/** @jsxImportSource @emotion/react */
// import Link from 'next/link'
import styled from '@emotion/styled'

import style, { Title, Wrap } from './style'

const H2title = Title.withComponent('h2')
type Props = {}

const MainHeader: React.FC<Props> = (props) => {
  return (
    <>
      <nav css={style.bg}>
        <H2title>title</H2title>
      </nav>
    </>
  )
}

export default MainHeader
