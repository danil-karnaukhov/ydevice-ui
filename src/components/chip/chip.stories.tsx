import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { Chip } from './chip'

const meta = {
  title: 'Inputs/Chip',
  component: Chip,
  args: {
    children: 'Это чип',
    variant: 'filled',
    active: false,
    disabled: false,
  },
} satisfies Meta<typeof Chip>

export const Default: StoryObj<typeof meta> = {}

export const Variants: StoryFn<typeof Chip> = (args) => (
  <div className='sb-row'>
    <Chip {...args} variant='filled' />
    <Chip {...args} variant='outlined' />
  </div>
)

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export default meta
