/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

import { COLOR } from 'cosnt/styled'

const radius = 4
const borderSize = 1

export type InputParam = {
  fontSize?: number
  height?: number
  paddingY?: number
  paddingLeft?: number
  paddingRight?: number
}

export const SInput = styled.input<InputParam>`
  display: inline-flex;
  align-items: center;
  border: ${borderSize}px solid ${COLOR.BORDER};
  justify-content: flex-start;
  line-height: 1em;
  width: 100%;
  outline: 0;
  border-radius: ${radius}px;
  box-sizing: border-box;

  ${(props) => `
    font-size: ${props.fontSize || 16}px;
    height: ${props.height || 40}px;
    padding-top: ${props.paddingY || 10}px;
    padding-bottom: ${props.paddingY || 10}px;
    padding-left: ${props.paddingLeft || 10}px;
    padding-right: ${props.paddingRight || 10}px;
  `}

  &:focus {
    border-color: ${COLOR.FOCUS};
    box-shadow: none;
  }
`

export function createInput(height = 40, fontSize = 16, paddingLeft = 10, paddingRight = 10): InputParam {
  const paddingY = (height - fontSize - borderSize * 2) / 2
  return { fontSize, height, paddingY, paddingLeft, paddingRight }
}

export const SInputWrap = styled.div<{ iconLeft?: boolean; iconRight?: boolean }>`
  position: relative;
  box-sizing: border-box;
`

export const SLeftIcon = styled.span``

export const SRightIcon = styled.span``
