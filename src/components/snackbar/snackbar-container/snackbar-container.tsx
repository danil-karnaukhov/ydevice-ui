'use client'

import { createRef, type ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { block } from '../../../utils/bem'
import { SnackbarItem, type SnackbarItemStatus, type SnackbarItemVariant } from '../snackbar-item/snackbar-item'

import './snackbar-container.scss'

export type SnackbarItemData = {
  id: string
  title: ReactNode
  description?: ReactNode
  status: SnackbarItemStatus
}

type SnackbarContainerProps = {
  items: SnackbarItemData[]
  itemsVariant: SnackbarItemVariant
  onClose: (id: string) => void
}

const b = block('snackbarContainer')

export const SnackbarContainer = (props: SnackbarContainerProps) => {
  const { items, itemsVariant, onClose } = props

  const [portalContainer] = useState(() => {
    return typeof window !== 'undefined' ? document.body : null
  })

  const itemRefs = Array(items.length)
    .fill(null)
    .map(() => createRef<HTMLDivElement>())

  if (!portalContainer) return null

  return createPortal(
    <TransitionGroup className={b()} component='div'>
      {items.map((item, index) => (
        <CSSTransition key={item.id} classNames={b('item')} nodeRef={itemRefs[index]} timeout={200} unmountOnExit>
          <SnackbarItem
            ref={itemRefs[index]}
            variant={itemsVariant}
            status={item.status}
            title={item.title}
            description={item.description}
            onClose={() => onClose(item.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>,
    portalContainer,
  )
}
