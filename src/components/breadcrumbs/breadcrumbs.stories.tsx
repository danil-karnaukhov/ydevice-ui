import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from './breadcrumbs'

const meta = {
  title: 'Breadcrumbs',
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
  },
} satisfies Meta<typeof Breadcrumbs>

export const Default: StoryObj<typeof meta> = {}

export default meta
