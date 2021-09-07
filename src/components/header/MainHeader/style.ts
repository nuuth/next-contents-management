import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size: 24px;
`

export const Wrap = styled.div`
  padding: 16px;
  border: solid 1px silver;
  margin: 16px 0;
  border-radius: 4px;
`

type ImageProps = {
  src: string
  width: number
}

export const Image0 = styled.div<{src:string,width:number}>`
  width: ${props => props.width};
  background: url(${props => props.src}) center center;
  background-size: contain;
`


const style = {
  bg: css`
    background-color: #333;
    color: #fff;
    font-size: 20px;
    padding: 15px;
  `,
  cls1: css`
    font-size: 16px;
    color: red;
  `
}

export default style