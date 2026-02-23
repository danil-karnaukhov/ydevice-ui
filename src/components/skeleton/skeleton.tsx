import type { ComponentPropsWithRef } from 'react'

import { block } from '../../utils/bem'

import './skeleton.scss'

export type SkeletonProps = ComponentPropsWithRef<'span'> & {
  width?: string | number
  height?: string | number
}

const b = block('skeleton')

export const Skeleton = (props: SkeletonProps) => {
  const { width, height, className, style = {}, ...rest } = props

  return (
    <span
      className={b(null, className)}
      style={{
        width,
        height,
        ...style,
      }}
      {...rest}
    />
  )
}
