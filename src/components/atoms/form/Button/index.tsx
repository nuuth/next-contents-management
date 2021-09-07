import { classList } from 'utils/react'

type Props = {
  color?: 'is-info' | 'is-primary'
  isFullwidth?: boolean
}

const Button: React.FC<Props> = ({ children, color, isFullwidth }) => {
  const cls = classList('button', color || '', {
    'is-fullwidth': isFullwidth,
  })
  return (
    <>
      <button className={cls}>{children}</button>
    </>
  )
}

export default Button
