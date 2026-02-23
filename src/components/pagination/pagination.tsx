'use client'

import ReactPaginate, { type ReactPaginateProps } from 'react-paginate'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { block } from '../../utils/bem'

import './pagination.scss'

const b = block('pagination')

export const Pagination = (props: ReactPaginateProps) => {
  const { pageCount, className, ...rest } = props

  if (pageCount <= 1) return null

  return (
    <div className={b(null, className)}>
      <ReactPaginate
        containerClassName={b('container')}
        pageClassName={b('page')}
        nextClassName={b('next')}
        previousClassName={b('previous')}
        breakClassName={b('break')}
        activeClassName='active'
        disabledClassName='disabled'
        nextLabel={<ChevronRightIcon />}
        previousLabel={<ChevronLeftIcon />}
        pageCount={pageCount}
        {...rest}
      />
    </div>
  )
}
