import type { Meta, StoryFn } from '@storybook/react-vite'

import { Skeleton } from './skeleton'

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
  args: {
    width: 300,
    height: 60,
  },
} satisfies Meta<typeof Skeleton>

export const Default: StoryFn<typeof meta> = (args) => <Skeleton {...args} />

export default meta
