import { FormEventHandler, InputHTMLAttributes } from 'react'

import { SInput, createInput, InputParam } from './styled'

type InputProps = {
  onValidation?: FormEventHandler
} & InputParam &
  InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  height,
  fontSize,
  paddingLeft,
  paddingRight,
  onValidation,
  ...props
}) => {
  return (
    <>
      <SInput
        type={type}
        value={value}
        {...createInput(height, fontSize, paddingLeft, paddingRight)}
        onInput={onValidation}
        {...props}
      />
    </>
  )
}

export default Input
