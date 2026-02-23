import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { ArrowDownUpIcon, FilterIcon, SearchIcon } from 'lucide-react'

import { Select } from './select'

const icons = {
  ArrowDownUpIcon: <ArrowDownUpIcon />,
  FilterIcon: <FilterIcon />,
  SearchIcon: <SearchIcon />,
}

const meta = {
  title: 'Select',
  component: Select,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['outlined'],
    },
    size: {
      control: { type: 'radio' },
      options: ['s', 'm', 'l'],
    },
    prefix: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    options: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    variant: 'outlined',
    size: 'm',
    options: [
      { label: 'Значение 1', value: '1' },
      { label: 'Значение 2', value: '2' },
      { label: 'Значение 3', value: '3' },
    ],
    placeholder: 'Выберите значение',
    clearable: false,
    hasError: false,
    disabled: false,
  },
} satisfies Meta<typeof Select>

export const Default: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <Select {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Prefix: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Select {...args} prefix={<ArrowDownUpIcon />} value={value} onChange={setValue} />
      <Select {...args} prefix={<FilterIcon />} value={value} onChange={setValue} />
      <Select {...args} prefix={<SearchIcon />} value={value} onChange={setValue} />
    </div>
  )
}

Prefix.argTypes = {
  prefix: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Select {...args} size='s' value={value} onChange={setValue} />
      <Select {...args} size='m' value={value} onChange={setValue} />
      <Select {...args} size='l' value={value} onChange={setValue} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Error: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Select {...args} value={value} hasError onChange={setValue} />
    </div>
  )
}

Error.argTypes = {
  hasError: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof Select> = (args) => (
  <div className='sb-column' style={{ width: '300px' }}>
    <Select {...args} value='' disabled />
  </div>
)

Disabled.argTypes = {
  disabled: {
    table: { disable: true },
  },
}

export default meta
