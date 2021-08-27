import Link from 'next/link'
import React from 'react'

import { classList } from 'utils/react'

interface Props {
  href: string
  color?: 'is-info' | 'is-primary' | 'is-success' | 'is-warning' | 'is-danger'
  size?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large'
  isFullwidth?: boolean
  isLight?: boolean
  isRounded?: boolean
  isOutlined?: boolean
  isDisabled?: boolean
  onClick?: React.MouseEventHandler
}

const LinkButton: React.FC<Props> = ({
  children,
  href,
  color,
  isFullwidth,
  isLight,
  size,
  isRounded,
  isOutlined,
  isDisabled,
  onClick,
}) => {
  const cls = classList('button', color || '', isLight || '', size || '', {
    'is-fullwidth': isFullwidth,
    'is-rounded': isRounded,
    'is-outlined': isOutlined,
    'is-static': isDisabled,
  })
  return (
    <>
      <Link href={href}>
        <a className={cls} onClick={onClick}>
          {children}
        </a>
      </Link>
    </>
  )
}

export default LinkButton
