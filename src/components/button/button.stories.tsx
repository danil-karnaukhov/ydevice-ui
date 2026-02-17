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
  title: 'Button',
  component: Button,
  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
  args: {
    variant: 'filled',
    color: 'brand',
    cornersShape: 'round',
    size: 'm',
    children: 'Кнопка',
    fullWidth: false,
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

export const CornersShape: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} cornersShape='round' />
    <Button {...args} cornersShape='brick' />
    <Button {...args} cornersShape='roundBrick' />
    <Button {...args} cornersShape='brickRound' />
  </div>
)

CornersShape.argTypes = {
  cornersShape: {
    table: { disable: true },
  },
}

export const Icons: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} leftIcon={<PlusIcon />} />
    <Button {...args} rightIcon={<ChevronDownIcon />} />
    <Button {...args} leftIcon={<ChevronLeftIcon />} rightIcon={<ChevronRightIcon />} />
  </div>
)

Icons.argTypes = {
  leftIcon: {
    table: { disable: true },
  },
  rightIcon: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Button> = (args) => (
  <div className='sb-row'>
    <Button {...args} size='xs' />
    <Button {...args} size='s' />
    <Button {...args} size='m' />
    <Button {...args} size='l' />
  </div>
)

Sizes.argTypes = {
  size: {
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
