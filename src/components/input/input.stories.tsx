import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { EyeIcon, LinkIcon, LockIcon, SearchIcon } from 'lucide-react'

import { Input } from './input'

const icons = {
  SearchIcon: <SearchIcon />,
  EyeIcon: <EyeIcon />,
  LinkIcon: <LinkIcon />,
  LockIcon: <LockIcon />,
}

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    prefix: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    suffix: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    rootRef: {
      table: { disable: true },
    },
    onClick: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    variant: 'outlined',
    cornersShape: 'round',
    size: 'm',
    placeholder: 'Введите значение',
    clearable: false,
    hasError: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>

export const Default: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <Input {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Variants: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} variant='filled' value={value} onChange={setValue} />
      <Input {...args} variant='outlined' value={value} onChange={setValue} />
    </div>
  )
}

Variants.argTypes = {
  variant: {
    table: { disable: true },
  },
}

export const CornersShape: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} cornersShape='round' value={value} onChange={setValue} />
      <Input {...args} cornersShape='brick' value={value} onChange={setValue} />
      <Input {...args} cornersShape='roundBrick' value={value} onChange={setValue} />
      <Input {...args} cornersShape='brickRound' value={value} onChange={setValue} />
    </div>
  )
}

CornersShape.argTypes = {
  cornersShape: {
    table: { disable: true },
  },
}

export const PrefixAndSuffix: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} prefix={<LinkIcon />} value={value} onChange={setValue} />
      <Input {...args} suffix={<SearchIcon />} value={value} onChange={setValue} />
      <Input {...args} prefix={<LockIcon />} suffix={<EyeIcon />} value={value} onChange={setValue} />
      <Input {...args} prefix='До' suffix='кг' value={value} onChange={setValue} />
    </div>
  )
}

PrefixAndSuffix.argTypes = {
  prefix: {
    table: { disable: true },
  },
  suffix: {
    table: { disable: true },
  },
}

export const Sizes: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} size='s' value={value} onChange={setValue} />
      <Input {...args} size='m' value={value} onChange={setValue} />
      <Input {...args} size='l' value={value} onChange={setValue} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export const Error: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} variant='filled' hasError value={value} onChange={setValue} />
      <Input {...args} variant='outlined' hasError value={value} onChange={setValue} />
    </div>
  )
}

Error.argTypes = {
  variant: {
    table: { disable: true },
  },
  hasError: {
    table: { disable: true },
  },
}

export const Disabled: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div className='sb-column' style={{ width: '300px' }}>
      <Input {...args} variant='filled' disabled value={value} onChange={setValue} />
      <Input {...args} variant='outlined' disabled value={value} onChange={setValue} />
    </div>
  )
}

Disabled.argTypes = {
  variant: {
    table: { disable: true },
  },
  disabled: {
    table: { disable: true },
  },
}

export default meta
