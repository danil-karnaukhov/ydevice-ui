import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { ListItem } from '../list-item/list-item'

import { List } from './list'

const options = [
  { label: 'Значение 1', value: '1' },
  { label: 'Значение 2', value: '2' },
  { label: 'Значение 3', value: '3' },
  { label: 'Значение 4', value: '4' },
  { label: 'Значение 5', value: '5' },
]

const meta = {
  title: 'Data display/List',
  component: List,
} satisfies Meta<typeof List>

export const Default: StoryFn<typeof meta> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  return (
    <List style={{ width: '300px' }} selectedValues={selectedValues} onSelect={setSelectedValues}>
      {options.map((option) => (
        <ListItem key={option.value} value={option.value} selected={selectedValues.includes(option.value)} showCheckbox>
          {option.label}
        </ListItem>
      ))}
    </List>
  )
}

export default meta
