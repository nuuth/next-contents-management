/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Head from 'next/head'

import ButtonLink from 'atoms/common/ButtonLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="section">
          <ButtonLink href="/" size="is-large" color="is-danger" isRounded isFullwidth>
            sample
          </ButtonLink>
          <Wrap3>Wrap3</Wrap3>
          <div
            css={css`
              font-size: 16px;
              color: red;
            `}
          >
            css props
          </div>
        </div>
      </div>
    </>
  )
}

const Wrap3 = styled.h3`
  padding: 16px;
  border: solid 1px silver;
  margin: 16px 0;
  border-radius: 4px;
`