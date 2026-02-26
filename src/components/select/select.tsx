'use client'

import { type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { mergeRefs } from '../../utils/react'
import { ListItem } from '../list-item/list-item'

import { SelectDropdown, type SelectDropdownPosition } from './select-dropdown/select-dropdown'
import { SelectInput, type SelectInputProps } from './select-input/select-input'

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = Omit<SelectInputProps, 'open'> & {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
}

export const Select = (props: SelectProps) => {
  const { options, value, size, disabled, ref, onChange, ...rest } = props

  const [open, setOpen] = useState(false)

  const [dropdownContainer] = useState(() => {
    return typeof window !== 'undefined' ? document.body : null
  })

  const [dropdownPosition, setDropdownPosition] = useState<SelectDropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
  })

  const inputRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const selectedOption = options.find((option) => option.value === value)

  const recalculateDropdownPosition = () => {
    if (!inputRef.current) return

    const inputRect = inputRef.current.getBoundingClientRect()

    setDropdownPosition({
      top: inputRect.bottom + window.scrollY,
      left: inputRect.left + window.scrollX,
      width: inputRect.width,
    })
  }

  const toggleOpen = () => {
    if (disabled) return

    if (!open) {
      recalculateDropdownPosition()
      setOpen(!open)
    } else {
      setOpen(false)
    }
  }

  const handleOptionSelect = (value: string) => () => {
    onChange(value)
    setOpen(false)
  }

  const handleClear = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onChange?.('')
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node

      if (!inputRef.current?.contains(target) && !dropdownRef.current?.contains(target)) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', recalculateDropdownPosition)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      window.removeEventListener('resize', recalculateDropdownPosition)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [open])

  return (
    <>
      <SelectInput
        ref={mergeRefs(ref, inputRef)}
        selectedOptionLabel={selectedOption?.label}
        size={size}
        open={open}
        disabled={disabled}
        onClick={toggleOpen}
        onClear={handleClear}
        {...rest}
      />

      {dropdownContainer &&
        createPortal(
          <SelectDropdown ref={dropdownRef} open={open} position={dropdownPosition}>
            {options.map((option) => (
              <ListItem
                key={option.value}
                selected={option.value === value}
                size={size}
                onClick={handleOptionSelect(option.value)}
              >
                {option.label}
              </ListItem>
            ))}
          </SelectDropdown>,
          dropdownContainer,
        )}
    </>
  )
}
