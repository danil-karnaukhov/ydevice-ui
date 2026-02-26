import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from './breadcrumbs'

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    linkComponent: {
      table: { disable: true },
    },
  },
  args: {
    items: [
      {
        title: 'Главная',
        href: '/',
      },
      {
        title: 'Каталог',
        href: '/',
      },
      {
        title: 'Категория 1',
        href: '/',
      },
      {
        title: 'Подкатегория 1',
      },
    ],
    size: 'm',
  },
} satisfies Meta<typeof Breadcrumbs>

export const Default: StoryObj<typeof meta> = {}

export const Sizes: StoryFn<typeof Breadcrumbs> = (args) => (
  <div className='sb-column'>
    <Breadcrumbs {...args} size='s' />
    <Breadcrumbs {...args} size='m' />
    <Breadcrumbs {...args} size='l' />
  </div>
)

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export default meta
