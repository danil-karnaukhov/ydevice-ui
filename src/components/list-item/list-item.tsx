import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { block } from '../../utils/bem'
import { Checkbox } from '../checkbox/checkbox'

import './list-item.scss'

export type ListItemProps = ComponentPropsWithRef<'li'> & {
  value: string
  subtitle?: ReactNode
  showCheckbox?: boolean
  isChecked?: boolean
}

const b = block('listItem')

export const ListItem = (props: ListItemProps) => {
  const { value, subtitle, showCheckbox, isChecked, children, className, ...rest } = props

  return (
    <li className={b(null, className)} data-value={value} {...rest}>
      {showCheckbox && <Checkbox checked={isChecked} tabIndex={-1} readOnly />}

      <span className={b('titleWrapper')}>
        {children}
        {subtitle && <span className={b('subtitle')}>{subtitle}</span>}
      </span>
    </li>
  )
}
