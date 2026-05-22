import type { ComponentPropsWithRef, ReactNode } from 'react'

import { block } from '../../utils/bem'

import './badge.scss'

export type BadgeSize = 's' | 'm' | 'l'

export type BadgeColor = 'brand' | 'blue' | 'indigo' | 'red' | 'pink' | 'orange' | 'green' | 'gray'

export type BadgeProps = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
  size?: BadgeSize
  color?: BadgeColor
}

const b = block('badge')

export const Badge = (props: BadgeProps) => {
  const { children, size = 'm', color = 'brand', className, ...rest } = props

  return (
    <div className={b({ size, color }, className)} {...rest}>
      {children}
    </div>
  )
}
