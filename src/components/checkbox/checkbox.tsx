'use client'

import { type ChangeEvent, type ComponentPropsWithRef, type ReactNode, type Ref, useEffect, useRef } from 'react'
import { CheckIcon } from 'lucide-react'

import { block } from '../../utils/bem'
import { mergeRefs } from '../../utils/react'

import './checkbox.scss'

export type CheckboxSize = 's' | 'm' | 'l'

export type CheckboxProps = Omit<ComponentPropsWithRef<'input'>, 'type' | 'size' | 'onChange'> & {
  size?: CheckboxSize
  label?: ReactNode
  rootRef?: Ref<HTMLLabelElement>
  indeterminate?: boolean
  onChange?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void
}

const b = block('checkbox')

export const Checkbox = (props: CheckboxProps) => {
  const { size, label, rootRef, ref, className, indeterminate, checked, onChange, ...rest } = props

  const classes = b({ size }, className)

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate
    }
  }, [indeterminate])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked, event)
  }

  return (
    <label className={classes} ref={rootRef}>
      <span className={b('indicator')}>
        <input ref={mergeRefs(ref, inputRef)} type='checkbox' checked={checked} onChange={handleChange} {...rest} />
        {checked && <CheckIcon />}
      </span>

      {label}
    </label>
  )
}
