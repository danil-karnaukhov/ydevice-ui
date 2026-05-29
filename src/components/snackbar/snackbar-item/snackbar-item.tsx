import { type ComponentPropsWithRef, type MouseEvent, type ReactNode } from 'react'
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, XIcon } from 'lucide-react'

import { block } from '../../../utils/bem'
import { IconButton } from '../../icon-button/icon-button'

import './snackbar-item.scss'

export type SnackbarItemVariant = 'filled' | 'light'

export type SnackbarItemStatus = 'info' | 'success' | 'warning' | 'error'

export type SnackbarItemProps = Omit<ComponentPropsWithRef<'div'>, 'title'> & {
  variant: SnackbarItemVariant
  status: SnackbarItemStatus
  title: ReactNode
  description?: ReactNode
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
}

const b = block('snackbarItem')

const icons = {
  info: InfoIcon,
  success: CircleCheckIcon,
  warning: TriangleAlertIcon,
  error: TriangleAlertIcon,
} as const

export const SnackbarItem = (props: SnackbarItemProps) => {
  const { variant, status, title, description, onClose, className, ...rest } = props

  const IconComponent = icons[status]

  return (
    <div className={b({ variant, status }, className)} {...rest}>
      {IconComponent && <IconComponent className={b('icon')} />}

      <div className={b('body')}>
        <div className={b('title')}>{title}</div>
        {description && <div className={b('description')}>{description}</div>}
      </div>

      <IconButton
        className={b('closeButton')}
        icon={<XIcon />}
        variant='text'
        color='neutral'
        size='s'
        compact
        onClick={onClose}
      />
    </div>
  )
}
