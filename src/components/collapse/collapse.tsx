'use client'

import { type ComponentPropsWithRef, type CSSProperties, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { block } from '../../utils/bem'
import { mergeRefs } from '../../utils/react'

import './collapse.scss'

export type CollapseProps = ComponentPropsWithRef<'div'> & {
  open: boolean
}

const b = block('collapse')

export const Collapse = (props: CollapseProps) => {
  const { open, ref, className, ...rest } = props

  const [contentHeight, setContentHeight] = useState(0)

  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [open])

  return (
    <CSSTransition
      classNames={{
        enter: 'collapseEnter',
        enterActive: 'collapseEnterActive',
        enterDone: 'collapseEnterDone',
        exit: 'collapseExit',
        exitActive: 'collapseExitActive',
        exitDone: 'collapseExitDone',
      }}
      nodeRef={contentRef}
      in={open}
      timeout={300}
      unmountOnExit={false}
    >
      <div
        className={b({ initiallyClosed: !open }, className)}
        style={
          {
            ['--max-height']: `${contentHeight}px`,
          } as CSSProperties
        }
        ref={mergeRefs(ref, contentRef)}
        {...rest}
      />
    </CSSTransition>
  )
}
