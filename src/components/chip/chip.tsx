import type { ComponentPropsWithRef } from 'react'

import { block } from '../../utils/bem'

import './chip.scss'

export type ChipVariant = 'filled' | 'outlined'

export type ChipProps = ComponentPropsWithRef<'button'> & {
  variant?: ChipVariant
  active?: boolean
}

const b = block('chip')

export const Chip = (props: ChipProps) => {
  const { children, variant = 'filled', active, className, ...rest } = props

  return (
    <button className={b({ variant, active }, className)} {...rest}>
      {children}
    </button>
  )
}
