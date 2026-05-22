import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Select } from '../select/select'

import { TextField } from './text-field'

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  args: {
    label: 'Название поля',
    required: false,
  },
} satisfies Meta<typeof TextField>

export const Default: StoryFn<typeof TextField> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <TextField {...args} inputProps={{ size: 'l', placeholder: 'Введите текст', value, onChange: setValue }} />
    </div>
  )
}

export const Error: StoryFn<typeof TextField> = (args) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <TextField
        errorMessage='Сообщение об ошибке'
        {...args}
        inputProps={{ size: 'l', placeholder: 'Введите текст', hasError: true, value, onChange: setValue }}
      />
    </div>
  )
}

export const SelectAsField: StoryFn<typeof TextField> = (args) => {
  const [value, setValue] = useState('1')

  return (
    <div style={{ width: '300px' }}>
      <TextField
        {...args}
        renderField={(id) => (
          <Select
            options={[
              { label: 'Вариант 1', value: '1' },
              { label: 'Вариант 2', value: '2' },
              { label: 'Вариант 3', value: '3' },
            ]}
            id={id}
            size='l'
            value={value}
            onChange={setValue}
          />
        )}
      />
    </div>
  )
}

export default meta
