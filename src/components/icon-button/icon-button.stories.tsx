import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { PlusIcon, SearchIcon, SettingsIcon } from 'lucide-react'

import { IconButton } from './icon-button'

const icons = {
  SettingsIcon: <SettingsIcon />,
  Plus: <PlusIcon />,
  SearchIcon: <SearchIcon />,
}

const meta = {
  title: 'Inputs/Icon Button',
  component: IconButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'ghost', 'text'],
    },
    color: {
      control: { type: 'radio' },
      options: ['brand', 'success', 'warning', 'danger'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['round', 'brick', 'roundBrick', 'brickRound'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 's', 'm', 'l'],
    },
    children: {
      table: { disable: true },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
  args: {
    variant: 'filled',
    color: 'brand',
    shape: 'round',
    size: 'm',
    icon: <SettingsIcon />,
    fullWidth: false,
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof IconButton>

export const Default: StoryObj<typeof meta> = {}

export const Variants: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} variant='filled' />
    <IconButton {...args} variant='outlined' />
    <IconButton {...args} variant='ghost' />
    <IconButton {...args} variant='text' />
  </div>
)

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export const Colors: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} color='brand' />
    <IconButton {...args} color='success' />
    <IconButton {...args} color='warning' />
    <IconButton {...args} color='danger' />
  </div>
)

Colors.argTypes = {
  color: {
    table: { disable: true },
  },
}

export const Shape: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} shape='round' />
    <IconButton {...args} shape='brick' />
    <IconButton {...args} shape='roundBrick' />
    <IconButton {...args} shape='brickRound' />
  </div>
)

Shape.argTypes = {
  shape: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} size='xs' />
    <IconButton {...args} size='s' />
    <IconButton {...args} size='m' />
    <IconButton {...args} size='l' />
  </div>
)

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Loading: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} variant='filled' loading />
    <IconButton {...args} variant='outlined' loading />
    <IconButton {...args} variant='ghost' loading />
    <IconButton {...args} variant='text' loading />
  </div>
)

Loading.argTypes = {
  variant: {
    table: { disable: true },
  },
  loading: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof IconButton> = (args) => (
  <div className='sb-row'>
    <IconButton {...args} variant='filled' disabled />
    <IconButton {...args} variant='outlined' disabled />
    <IconButton {...args} variant='ghost' disabled />
    <IconButton {...args} variant='text' disabled />
  </div>
)

Disabled.argTypes = {
  variant: {
    table: { disable: true },
  },
  disabled: {
    table: { disable: true },
  },
}

export default meta
