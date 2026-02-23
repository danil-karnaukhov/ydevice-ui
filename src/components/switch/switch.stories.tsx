import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Switch } from './switch'

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
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
    disabled: false,
  },
} satisfies Meta<typeof Switch>

export const Default: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false)

  return <Switch {...args} checked={value} onChange={setValue} />
}

export const Sizes: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false)

  return (
    <div className='sb-row'>
      <Switch {...args} size='s' checked={value} onChange={setValue} />
      <Switch {...args} size='m' checked={value} onChange={setValue} />
      <Switch {...args} size='l' checked={value} onChange={setValue} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof Switch> = (args) => (
  <div className='sb-row'>
    <Switch {...args} checked={false} disabled />
    <Switch {...args} checked={true} disabled />
  </div>
)

Disabled.argTypes = {
  disabled: {
    table: { disable: true },
  },
}

export default meta
