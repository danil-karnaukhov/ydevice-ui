import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Pagination } from './pagination'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: {
    size: 'm',
    pageCount: 10,
  },
} satisfies Meta<typeof Pagination>

export const Default: StoryFn<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1)

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1)
  }

  return <Pagination {...args} forcePage={page - 1} onPageChange={handlePageClick} />
}

export const Sizes: StoryFn<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1)

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1)
  }

  return (
    <div className='sb-column'>
      <Pagination {...args} size='s' forcePage={page - 1} onPageChange={handlePageClick} />
      <Pagination {...args} size='m' forcePage={page - 1} onPageChange={handlePageClick} />
      <Pagination {...args} size='l' forcePage={page - 1} onPageChange={handlePageClick} />
    </div>
  )
}

Sizes.argTypes = {
  size: {
    table: { disable: true },
  },
}

export default meta
