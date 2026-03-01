import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { block } from '../../utils/bem'
import { Spinner, type SpinnerSize } from '../spinner/spinner'

import './button.scss'

export type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'text'

export type ButtonColor = 'brand' | 'success' | 'warning' | 'danger'

export type ButtonShape = 'round' | 'brick' | 'roundBrick' | 'brickRound'

export type ButtonSize = 's' | 'm' | 'l'

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariant
  color?: ButtonColor
  shape?: ButtonShape
  size?: ButtonSize
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  compact?: boolean
  loading?: boolean
}

const b = block('button')

const spinnerSizes: Record<ButtonSize, SpinnerSize> = {
  s: 'xs',
  m: 's',
  l: 'm',
}

export const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    color = 'brand',
    shape = 'round',
    size = 'm',
    startIcon,
    endIcon,
    fullWidth,
    compact,
    loading,
    disabled,
    children,
    className,
    ...rest
  } = props

  const classes = b(
    {
      variant,
      color,
      shape,
      size,
      fullWidth,
      compact,
      loading,
    },
    className,
  )

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {startIcon && <span className={b('startIcon')}>{startIcon}</span>}

      {children && <span className={b('label')}>{children}</span>}

      {endIcon && <span className={b('endIcon')}>{endIcon}</span>}

      {loading && <Spinner color='inherit' size={spinnerSizes[size]} centered />}
    </button>
  )
}
