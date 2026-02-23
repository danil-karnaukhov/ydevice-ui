import { type ComponentPropsWithRef, type MouseEvent, type ReactNode } from 'react'
import { ChevronDown, XIcon } from 'lucide-react'

import { block } from '../../../utils/bem'

import './select-input.scss'

export type SelectInputVariant = 'outlined'

export type SelectInputSize = 's' | 'm' | 'l'

export type SelectInputProps = Omit<ComponentPropsWithRef<'div'>, 'prefix' | 'children' | 'onChange'> & {
  variant?: SelectInputVariant
  size?: SelectInputSize
  selectedOptionLabel?: string
  placeholder?: string
  prefix?: ReactNode
  open: boolean
  clearable?: boolean
  hasError?: boolean
  disabled?: boolean
  onClear?: (event: MouseEvent<HTMLButtonElement>) => void
}

const b = block('selectInput')

export const SelectInput = (props: SelectInputProps) => {
  const {
    variant = 'outlined',
    size = 'm',
    selectedOptionLabel,
    placeholder,
    prefix,
    open,
    clearable,
    hasError,
    disabled,
    className,
    onClear,
    ...rest
  } = props

  const classes = b(
    {
      variant,
      size,
      open,
      hasValue: !!selectedOptionLabel,
      hasError,
      disabled,
    },
    className,
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className={classes} tabIndex={0} {...rest}>
      {prefix}

      {selectedOptionLabel ? (
        <div className={b('selectedOption')}>{selectedOptionLabel}</div>
      ) : (
        <div className={b('placeholder')}>{placeholder}</div>
      )}

      {clearable && (
        <button className={b('clearButton')} onClick={onClear} disabled={disabled}>
          <XIcon />
        </button>
      )}

      <ChevronDown className={b('arrow')} />
    </div>
  )
}
