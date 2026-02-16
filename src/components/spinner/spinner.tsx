import type { ComponentPropsWithRef } from 'react'

import { block } from '../../utils/bem'

import './spinner.scss'

export type SpinnerProps = ComponentPropsWithRef<'span'> & {
  color?: 'brand' | 'inherit'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  centered?: boolean
}

const b = block('spinner')

export const Spinner = (props: SpinnerProps) => {
  const { color = 'brand', size = 'm', centered, className, ...rest } = props

  const classes = b(
    {
      color,
      size,
      centered,
    },
    className,
  )

  return (
    <span className={classes} {...rest}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='20 20 40 40'>
        <circle cx='40' cy='40' fill='none' stroke='currentColor' strokeLinecap='round' />
      </svg>
    </span>
  )
}
