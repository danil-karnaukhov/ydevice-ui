import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { block } from '../../utils/bem'
import { Checkbox } from '../checkbox/checkbox'

import './list-item.scss'

export type ListItemSize = 's' | 'm' | 'l'

export type ListItemProps = ComponentPropsWithRef<'li'> & {
  value?: string
  size?: ListItemSize
  suffix?: ReactNode
  selected?: boolean
  showCheckbox?: boolean
}

const b = block('listItem')

export const ListItem = (props: ListItemProps) => {
  const { value, size = 'm', suffix, selected, showCheckbox, children, className, ...rest } = props

  const classes = b(
    {
      size,
      selected,
      showCheckbox,
    },
    className,
  )

  return (
    <li className={classes} data-value={value} {...rest}>
      {showCheckbox && <Checkbox className={b('checkbox')} size={size} checked={selected} tabIndex={-1} readOnly />}

      {children}

      {suffix && <span className={b('suffix')}>{suffix}</span>}
    </li>
  )
}
