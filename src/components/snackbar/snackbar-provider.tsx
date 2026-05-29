'use client'

import { createContext, type ReactNode, useContext, useRef, useState } from 'react'

import { SnackbarContainer, type SnackbarItemData } from './snackbar-container/snackbar-container'
import { type SnackbarItemStatus, type SnackbarItemVariant } from './snackbar-item/snackbar-item'

type SnackbarContext = {
  info: (title: ReactNode, description?: ReactNode) => void
  success: (title: ReactNode, description?: ReactNode) => void
  warning: (title: ReactNode, description?: ReactNode) => void
  error: (title: ReactNode, description?: ReactNode) => void
}

type SnackbarProvideProps = {
  children: ReactNode
  duration?: number
  defaultItemsVariant?: SnackbarItemVariant
}

const SnackbarContext = createContext<SnackbarContext | null>(null)

export const SnackbarProvider = (props: SnackbarProvideProps) => {
  const { children, duration = 3000, defaultItemsVariant = 'filled' } = props

  const [items, setItems] = useState<SnackbarItemData[]>([])
  const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map())

  const close = (id: string) => {
    const timeout = timeoutsRef.current.get(id)

    if (timeout) {
      clearTimeout(timeout)
      timeoutsRef.current.delete(id)
    }

    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const show = (status: SnackbarItemStatus, title: ReactNode, description?: ReactNode) => {
    const id = `${Date.now()}-${Math.random().toString(36)}`

    setItems((prev) => [
      {
        id,
        title,
        description,
        status,
      },
      ...prev,
    ])

    if (duration <= 0) return

    const timeout = setTimeout(() => {
      close(id)
    }, duration)

    timeoutsRef.current.set(id, timeout)
  }

  const value = {
    info: (title: ReactNode, description?: ReactNode) => show('info', title, description),
    success: (title: ReactNode, description?: ReactNode) => show('success', title, description),
    warning: (title: ReactNode, description?: ReactNode) => show('warning', title, description),
    error: (title: ReactNode, description?: ReactNode) => show('error', title, description),
  }

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <SnackbarContainer items={items} itemsVariant={defaultItemsVariant} onClose={close} />
    </SnackbarContext.Provider>
  )
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)

  if (!context) {
    throw new Error('useSnackbar must be used within SnackbarProvider')
  }

  return context
}
