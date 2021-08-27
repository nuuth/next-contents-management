/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
// import Link from 'next/link'
import styled from '@emotion/styled'

import style, { Title, Wrap } from './style'

const H2title = Title.withComponent('h2')
type Props = {}

const MainHeader: React.FC<Props> = ({}) => {
  return (
    <>
      <nav css={style.bg}>
        <H2title>title</H2title>
        <div css={style.cls1}>value 1</div>
      </nav>
      <div className="section">
        <Wrap>aaaaa</Wrap>
        <Wrap2>bbbb</Wrap2>
      </div>
    </>
  )
}

const colors = {
  border: '#ff0000',
}

const Wrap2 = styled.div`
  padding: 16px;
  border: solid 2px ${colors.border};
  margin: 16px 0;
  border-radius: 4px;
`

export default MainHeader
