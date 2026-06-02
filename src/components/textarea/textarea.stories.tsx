import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Textarea } from './textarea'

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,
  args: {
    variant: 'outlined',
    size: 'm',
    placeholder: 'Введите значение',
    rows: 3,
    hasError: false,
    disabled: false,
  },
} satisfies Meta<typeof Textarea>

export const Default: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <Textarea {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Variants: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Textarea {...args} variant='filled' value={value} onChange={setValue} />
      <Textarea {...args} variant='outlined' value={value} onChange={setValue} />
    </div>
  )
}

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Textarea {...args} size='s' value={value} onChange={setValue} />
      <Textarea {...args} size='m' value={value} onChange={setValue} />
      <Textarea {...args} size='l' value={value} onChange={setValue} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Error: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Textarea {...args} variant='filled' hasError value={value} onChange={setValue} />
      <Textarea {...args} variant='outlined' hasError value={value} onChange={setValue} />
    </div>
  )
}

Error.argTypes = {
  variant: {
    table: { disable: true },
  },
  hasError: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Textarea {...args} variant='filled' disabled value={value} onChange={setValue} />
      <Textarea {...args} variant='outlined' disabled value={value} onChange={setValue} />
    </div>
  )
}

Disabled.argTypes = {
  variant: {
    table: { disable: true },
  },
  disabled: {
    table: { disable: true },
  },
}

export default meta
