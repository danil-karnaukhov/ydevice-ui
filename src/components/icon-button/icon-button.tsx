import type { ReactNode } from 'react'

import { Button, type ButtonProps } from '../button/button'

export type IconButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon'> & {
  children?: never
  icon: ReactNode
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, ...rest } = props

  return <Button startIcon={icon} {...rest} />
}
