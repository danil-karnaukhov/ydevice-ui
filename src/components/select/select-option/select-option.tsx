import type { ComponentPropsWithRef } from 'react'

import { block } from '../../../utils/bem'

import './select-option.scss'

export type SelectOptionProps = ComponentPropsWithRef<'div'> & {
  isSelected: boolean
}

const b = block('selectOption')

export const SelectOption = (props: SelectOptionProps) => {
  const { isSelected, children, className, ...rest } = props

  const classes = b(
    {
      isSelected,
    },
    className,
  )

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
