import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { Spinner } from './spinner'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {
    color: 'brand',
    size: 'm',
    centered: false,
  },
} satisfies Meta<typeof Spinner>

export const Default: StoryObj<typeof meta> = {}

export const Colors: StoryFn<typeof Spinner> = (args) => (
  <div className='sb-row'>
    <Spinner {...args} color='brand' />
    <Spinner {...args} color='inherit' />
  </div>
)

Colors.argTypes = {
  color: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Spinner> = (args) => (
  <div className='sb-row'>
    <Spinner {...args} size='xs' />
    <Spinner {...args} size='s' />
    <Spinner {...args} size='m' />
    <Spinner {...args} size='l' />
    <Spinner {...args} size='xl' />
  </div>
)

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export default meta
