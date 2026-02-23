import { type ComponentPropsWithRef, type MouseEvent } from 'react'

import { block } from '../../utils/bem'

import './list.scss'

export type ListProps = Omit<ComponentPropsWithRef<'ul'>, 'onSelect'> & {
  selectedValues: string[]
  onSelect: (values: string[]) => void
}

const b = block('list')

export const List = (props: ListProps) => {
  const { selectedValues, onSelect, children, className, ...rest } = props

  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    const listItem = (event.target as HTMLElement).closest('li')

    if (!listItem || !listItem.dataset.value) return

    if (selectedValues.includes(listItem.dataset.value)) {
      const filteredValues = selectedValues.filter((selectedValue) => selectedValue !== listItem.dataset.value)
      onSelect(filteredValues)
    } else {
      onSelect([...selectedValues, listItem.dataset.value])
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className={b(null, className)} onClick={handleClick} {...rest}>
      {children}
    </ul>
  )
}
