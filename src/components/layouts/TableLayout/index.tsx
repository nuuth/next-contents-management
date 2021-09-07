/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

type TableLyoutProps = {}
export const STableLayout = styled.div<{ src: string; width: number }>`
  width: ${(props) => props.width};
  background: url(${(props) => props.src}) center center;
  background-size: contain;
`
