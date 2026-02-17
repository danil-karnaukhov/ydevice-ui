import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { block } from '../../utils/bem'
import { Spinner, type SpinnerSize } from '../spinner/spinner'

import './button.scss'

export type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'text'

export type ButtonColor = 'brand' | 'success' | 'warning' | 'danger'

export type ButtonCornersShape = 'round' | 'brick' | 'roundBrick' | 'brickRound'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariant
  color?: ButtonColor
  cornersShape?: ButtonCornersShape
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const b = block('button')

const spinnerSizes: Record<ButtonSize, SpinnerSize> = {
  xs: 'xs',
  s: 'xs',
  m: 's',
  l: 'm',
}

export const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    color = 'brand',
    cornersShape = 'round',
    size = 'm',
    leftIcon,
    rightIcon,
    fullWidth,
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
      cornersShape,
      size,
      fullWidth,
      loading,
    },
    className,
  )

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      <span className={b('content')}>
        {leftIcon && <span className={b('leftIcon')}>{leftIcon}</span>}

        {children}

        {rightIcon && <span className={b('rightIcon')}>{rightIcon}</span>}
      </span>

      {loading && <Spinner color='inherit' size={spinnerSizes[size]} centered />}
    </button>
  )
}
