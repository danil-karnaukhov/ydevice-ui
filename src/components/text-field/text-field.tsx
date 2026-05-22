import { type ComponentPropsWithRef, type ReactNode, useId } from 'react'

import { block } from '../../utils/bem'
import { Input, type InputProps } from '../input/input'

import './text-field.scss'

export type TextFieldProps = ComponentPropsWithRef<'div'> & {
  label?: string
  errorMessage?: string
  required?: boolean
  inputProps?: InputProps
  renderField?: (id: string) => ReactNode
}

const b = block('text-field')

export const TextField = (props: TextFieldProps) => {
  const { label, errorMessage, required, inputProps = {}, renderField, className, ...rest } = props

  const id = useId()

  return (
    <div className={b(null, className)} {...rest}>
      {label && (
        <label className={b('label')} htmlFor={id}>
          {label}
          {required && <span className={b('asterisk')}>*</span>}
        </label>
      )}

      {renderField ? renderField(id) : <Input {...inputProps} id={id} />}

      {errorMessage && <p className={b('errorMessage')}>{errorMessage}</p>}
    </div>
  )
}
