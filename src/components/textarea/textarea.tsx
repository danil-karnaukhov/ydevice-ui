'use client'

import type { ChangeEvent, ComponentPropsWithRef } from 'react'

import { block } from '../../utils/bem'

import './textarea.scss'

export type TextAreaVariant = 'filled' | 'outlined'

export type TextAreaSize = 's' | 'm' | 'l'

export type TextareaProps = Omit<ComponentPropsWithRef<'textarea'>, 'size' | 'onChange'> & {
  variant?: TextAreaVariant
  size?: TextAreaSize
  hasError?: boolean
  onChange?: (value: string) => void
}

const b = block('textarea')

export const Textarea = (props: TextareaProps) => {
  const { variant = 'outlined', size = 'm', className, hasError, disabled, onChange, ...rest } = props

  const classes = b(
    {
      variant,
      size,
      hasError,
    },
    className,
  )

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }

  return <textarea className={classes} disabled={disabled} onChange={handleChange} {...rest} />
}
