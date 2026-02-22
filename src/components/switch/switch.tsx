'use client'

import { type ChangeEvent, type ComponentPropsWithRef, type ReactNode, type Ref } from 'react'

import { block } from '../../utils/bem'

import './switch.scss'

export type SwitchSize = 's' | 'm' | 'l'

export type SwitchProps = Omit<ComponentPropsWithRef<'input'>, 'type' | 'size' | 'onChange'> & {
  size?: SwitchSize
  label?: ReactNode
  rootRef?: Ref<HTMLLabelElement>
  onChange?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void
}

const b = block('switch')

export const Switch = (props: SwitchProps) => {
  const { size = 'm', label, rootRef, className, onChange, ...rest } = props

  const classes = b({ size }, className)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked, event)
  }

  return (
    <label className={classes} ref={rootRef}>
      <span className={b('indicator')}>
        <input type='checkbox' onChange={handleChange} {...rest} />
      </span>

      {label}
    </label>
  )
}
