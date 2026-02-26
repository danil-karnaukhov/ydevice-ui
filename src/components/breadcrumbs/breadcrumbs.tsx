import { type ComponentPropsWithRef, type ElementType, Fragment } from 'react'
import { ChevronRight } from 'lucide-react'

import { block } from '../../utils/bem'

import './breadcrumbs.scss'

export type Breadcrumb = {
  title: string
  href?: string
}

export type BreadcrumbsSize = 's' | 'm' | 'l'

export type BreadcrumbsProps = ComponentPropsWithRef<'div'> & {
  items: Breadcrumb[]
  size?: BreadcrumbsSize
  linkComponent?: ElementType
}

const b = block('breadcrumbs')

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { items, size = 'm', linkComponent: LinkComponent = 'a', className, ...rest } = props

  return (
    <div className={b({ size }, className)} {...rest}>
      {items.map((item, index) => {
        const isNotLastItem = index !== items.length - 1

        return (
          <Fragment key={`${item.title}_${index}`}>
            {item.href && isNotLastItem ? (
              <LinkComponent className={b('linkItem')} href={item.href}>
                {item.title}
              </LinkComponent>
            ) : (
              <span className={b('item')}>{item.title}</span>
            )}

            {isNotLastItem && <ChevronRight className={b('separator')} />}
          </Fragment>
        )
      })}
    </div>
  )
}
