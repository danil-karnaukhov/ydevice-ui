'use client'

import ReactPaginate, { type ReactPaginateProps } from 'react-paginate'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { block } from '../../utils/bem'

import './pagination.scss'

export type PaginationSize = 's' | 'm' | 'l'

export type PaginationProps = ReactPaginateProps & {
  size?: PaginationSize
}

const b = block('pagination')

export const Pagination = (props: PaginationProps) => {
  const { pageCount, size = 'm', className, ...rest } = props

  if (pageCount <= 1) return null

  return (
    <ReactPaginate
      containerClassName={b({ size }, className)}
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
  )
}
