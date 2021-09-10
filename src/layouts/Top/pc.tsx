import { useEffect } from 'react'

import ButtonLink from 'components/atoms/common/ButtonLink'
import Input from 'components/atoms/form/Input'
import { TopLayoutProps } from 'pages/index'

const TopLayoutPC: React.FC<TopLayoutProps> = (props) => {
  console.log('再描画 pc')

  return (
    <>
      <div className="section">
        <div>PC</div>
        <ButtonLink href="/">{props.status}</ButtonLink>
        <div>
          <Input type="text" fontSize={20} />
        </div>
      </div>
    </>
  )
}

export default TopLayoutPC
