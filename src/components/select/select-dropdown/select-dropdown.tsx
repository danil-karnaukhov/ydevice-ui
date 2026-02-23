import { type ComponentPropsWithRef, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { block } from '../../../utils/bem'
import { mergeRefs } from '../../../utils/react'

import './select-dropdown.scss'

export type SelectDropdownPosition = {
  top: number
  left: number
  width: number
}

export type SelectDropdownProps = ComponentPropsWithRef<'div'> & {
  open: boolean
  position: SelectDropdownPosition
}

const b = block('selectDropdown')

export const SelectDropdown = (props: SelectDropdownProps) => {
  const { open, position, ref, children, className, ...rest } = props

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  return (
    <CSSTransition
      in={open}
      nodeRef={dropdownRef}
      timeout={200}
      unmountOnExit
      classNames={{
        enter: 'animationEnter',
        enterActive: 'animationEnterActive',
        exit: 'animationExit',
        exitActive: 'animationExitActive',
      }}
    >
      <div className={b(null, className)} style={position} ref={mergeRefs(dropdownRef, ref)} {...rest}>
        <div className={b('optionList')}>{children}</div>
      </div>
    </CSSTransition>
  )
}
