'use client'

import { type ChangeEvent, type ComponentPropsWithRef, type MouseEvent, type ReactNode, type Ref, useRef } from 'react'
import { XIcon } from 'lucide-react'

import { block } from '../../utils/bem'
import { mergeRefs } from '../../utils/react'

import './input.scss'

export type InputVariant = 'filled' | 'outlined'

export type InputSize = 's' | 'm' | 'l'

export type InputCornersShape = 'round' | 'brick' | 'roundBrick' | 'brickRound'

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'size' | 'prefix' | 'onClick' | 'onChange'> & {
  variant?: InputVariant
  cornersShape?: InputCornersShape
  size?: InputSize
  rootRef?: Ref<HTMLDivElement>
  prefix?: ReactNode
  suffix?: ReactNode
  clearable?: boolean
  hasError?: boolean
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  onChange?: (value: string) => void
}

const b = block('input')

export const Input = (props: InputProps) => {
  const {
    variant = 'outlined',
    cornersShape = 'round',
    size = 'm',
    rootRef,
    ref,
    value,
    prefix,
    suffix,
    className,
    clearable,
    hasError,
    disabled,
    onClick,
    onChange,
    ...rest
  } = props

  const classes = b(
    {
      variant,
      cornersShape,
      size,
      clearable,
      hasError,
      hasValue: !!value || value === 0,
    },
    className,
  )

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (inputRef.current && (event.target as Element).tagName !== 'INPUT') {
      inputRef.current.focus()
    }

    onClick?.(event)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    inputRef.current?.focus()
    onChange?.('')
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={classes} ref={rootRef} onClick={handleClick}>
      {prefix && <div className={b('prefix')}>{prefix}</div>}

      <input ref={mergeRefs(ref, inputRef)} value={value} disabled={disabled} onChange={handleChange} {...rest} />

      {clearable && (
        <button className={b('clearButton')} onClick={handleClear} disabled={disabled}>
          <XIcon />
        </button>
      )}

      {suffix && <div className={b('suffix')}>{suffix}</div>}
    </div>
  )
}
