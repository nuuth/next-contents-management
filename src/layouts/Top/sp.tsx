import { useRef, useState } from 'react'

import { ShopParams } from 'api'
import Input from 'components/atoms/form/Input'
import InputIcon from 'components/atoms/form/Input/InputIcon'
import useValidations from 'hooks/useValidations'
import { TopLayoutProps } from 'pages/index'

const TopLayoutSP: React.FC<TopLayoutProps> = (props) => {
  console.log('再描画 sp')

  const valuesState = useState<{ [K in keyof typeof ShopParams]: string }>({
    id: '',
    name: '',
    isClose: '',
  })
  const [values, setValues] = valuesState
  const { validations, checked } = useValidations(valuesState)

  return (
    <>
      <div>SP</div>
      <div className="section">
        <Input type="text" {...validations('id')} />
        <Input type="text" {...validations('name')} />
        <button onClick={() => console.log('values : ', values)}>check</button>
      </div>
    </>
  )
}

export default TopLayoutSP
