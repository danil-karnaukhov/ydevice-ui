import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Checkbox } from './checkbox'

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    rootRef: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    size: 'm',
    label: 'Подпись',
    indeterminate: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export const Default: StoryFn<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false)

  return <Checkbox {...args} checked={value} onChange={setValue} />
}

export const Sizes: StoryFn<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false)

  return (
    <div className='sb-row'>
      <Checkbox {...args} size='s' checked={value} onChange={setValue} />
      <Checkbox {...args} size='m' checked={value} onChange={setValue} />
      <Checkbox {...args} size='l' checked={value} onChange={setValue} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof Checkbox> = (args) => (
  <div className='sb-row'>
    <Checkbox {...args} checked={false} disabled />
    <Checkbox {...args} checked disabled />
    <Checkbox {...args} checked={false} indeterminate disabled />
  </div>
)

Disabled.argTypes = {
  indeterminate: {
    table: { disable: true },
  },
  disabled: {
    table: { disable: true },
  },
}

export default meta
