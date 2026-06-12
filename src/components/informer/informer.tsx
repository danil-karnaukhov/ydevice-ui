import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { block } from '../../utils/bem'

import './informer.scss'

export type InformerVariant = 'filled' | 'outlined'

export type InformerStatus = 'info' | 'success' | 'warning' | 'error'

export type InformerProps = Omit<ComponentPropsWithRef<'div'>, 'title'> & {
  variant?: InformerVariant
  status?: InformerStatus
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
}

const b = block('informer')

export const Informer = (props: InformerProps) => {
  const { variant = 'filled', status = 'info', title, description, icon, className, ...rest } = props

  return (
    <div className={b({ variant, status }, className)} {...rest}>
      {icon}
      <div className={b('body')}>
        {title && <div className={b('title')}>{title}</div>}
        {description && <div className={b('description')}>{description}</div>}
      </div>
    </div>
  )
}
