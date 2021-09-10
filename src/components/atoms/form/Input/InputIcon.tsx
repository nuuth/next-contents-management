/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Input from './index'

const InputIcon: React.FC<{}> = (props) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Input type="text" paddingLeft={40} paddingRight={40} />
      <span
        css={css`
          position: absolute;
          left: 0;
          top: 1px;
          bottom: 1px;
          width: 40px;
        `}
      >
        🕙
      </span>
    </div>
  )
}

export default InputIcon
