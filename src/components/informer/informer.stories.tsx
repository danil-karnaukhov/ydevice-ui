import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon } from 'lucide-react'

import { Informer } from './informer'

const icons = {
  Info: <InfoIcon />,
  CircleCheck: <CircleCheckIcon />,
  TriangleAlert: <TriangleAlertIcon />,
}

const meta = {
  title: 'Feedback/Informer',
  component: Informer,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
  args: {
    variant: 'filled',
    status: 'info',
    title: 'Сообщение',
    description: 'Описание сообщения',
  },
} satisfies Meta<typeof Informer>

export const Default: StoryObj<typeof meta> = {}

export const Variants: StoryFn<typeof Informer> = (args) => (
  <div className='sb-column'>
    <Informer {...args} variant='filled' />
    <Informer {...args} variant='outlined' />
  </div>
)

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export const Statuses: StoryFn<typeof Informer> = (args) => (
  <div className='sb-column'>
    <Informer {...args} status='info' />
    <Informer {...args} status='success' />
    <Informer {...args} status='warning' />
    <Informer {...args} status='error' />
  </div>
)

Statuses.argTypes = {
  status: {
    table: { disable: true },
  },
}

export default meta
