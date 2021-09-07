/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import TopLayout from 'layouts/Top'

export type TopLayoutProps = { status: string }

export const getStaticProps: GetStaticProps<TopLayoutProps> = () => {
  return {
    props: {
      status: 'success',
    },
  }
}

export default function Home(props: TopLayoutProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <TopLayout {...props} />
      </div>
    </>
  )
}
