import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from 'lucide-react'

import { Button } from './button'

const icons = {
  Plus: <PlusIcon />,
  ChevronDown: <ChevronDownIcon />,
  ChevronLeft: <ChevronLeftIcon />,
  ChevronRight: <ChevronRightIcon />,
}

const meta = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    endIcon: {
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
    children: 'Кнопка',
    fullWidth: false,
    compact: false,
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export const Default: StoryObj<typeof meta> = {}

export const Variants: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} variant='filled' />
    <Button {...args} variant='outlined' />
    <Button {...args} variant='ghost' />
    <Button {...args} variant='text' />
  </div>
)

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export const Colors: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} color='neutral' />
    <Button {...args} color='brand' />
    <Button {...args} color='success' />
    <Button {...args} color='warning' />
    <Button {...args} color='danger' />
  </div>
)

Colors.argTypes = {
  color: {
    table: { disable: true },
  },
}

export const Shape: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} shape='round' />
    <Button {...args} shape='brick' />
    <Button {...args} shape='roundBrick' />
    <Button {...args} shape='brickRound' />
  </div>
)

Shape.argTypes = {
  shape: {
    table: { disable: true },
  },
}

export const Icons: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} startIcon={<PlusIcon />} />
    <Button {...args} endIcon={<ChevronDownIcon />} />
    <Button {...args} startIcon={<ChevronLeftIcon />} endIcon={<ChevronRightIcon />} />
  </div>
)

Icons.argTypes = {
  startIcon: {
    table: { disable: true },
  },
  endIcon: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Button> = (args) => (
  <div className='sb-column'>
    <div className='sb-row'>
      <Button {...args} size='s' />
      <Button {...args} size='m' />
      <Button {...args} size='l' />
    </div>

    <div className='sb-row'>
      <Button {...args} size='s' compact />
      <Button {...args} size='m' compact />
      <Button {...args} size='l' compact />
    </div>
  </div>
)

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
  compact: {
    table: { disable: true },
  },
}

export const Loading: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} variant='filled' loading />
    <Button {...args} variant='outlined' loading />
    <Button {...args} variant='ghost' loading />
    <Button {...args} variant='text' loading />
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

export const Disabled: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} variant='filled' disabled />
    <Button {...args} variant='outlined' disabled />
    <Button {...args} variant='ghost' disabled />
    <Button {...args} variant='text' disabled />
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
