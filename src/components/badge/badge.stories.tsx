import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { Badge } from './badge'

const meta = {
  title: 'Data display/Badge',
  component: Badge,
  args: {
    children: 'Это бейджик',
    size: 'm',
    color: 'brand',
  },
} satisfies Meta<typeof Badge>

export const Default: StoryObj<typeof meta> = {}

export const Sizes: StoryFn<typeof Badge> = (args) => (
  <div className='sb-row'>
    <Badge {...args} size='s' />
    <Badge {...args} size='m' />
    <Badge {...args} size='l' />
  </div>
)

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Colors: StoryFn<typeof Badge> = (args) => (
  <div className='sb-row'>
    <Badge {...args} color='brand' />
    <Badge {...args} color='blue' />
    <Badge {...args} color='indigo' />
    <Badge {...args} color='red' />
    <Badge {...args} color='pink' />
    <Badge {...args} color='orange' />
    <Badge {...args} color='green' />
    <Badge {...args} color='gray' />
  </div>
)

Sizes.argTypes = {
  color: {
    table: { disable: true },
  },
}

export default meta
