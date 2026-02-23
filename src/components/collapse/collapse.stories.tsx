import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react-vite'

import { Button } from '../button/button'

import { Collapse } from './collapse'

const meta = {
  title: 'Miscellaneous/Collapse',
  component: Collapse,
} satisfies Meta<typeof Collapse>

export const Default: StoryFn<typeof meta> = () => {
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div style={{ width: '400px' }}>
      <Button style={{ marginBottom: '16px' }} onClick={handleOpen} size='s'>
        {open ? 'Закрыть' : 'Открыть'}
      </Button>

      <Collapse open={open}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum atque libero quo quia natus velit et
        cumque? Fugit laboriosam minima nobis sit natus similique nihil, molestias nemo eligendi ullam! Enim veritatis
        ullam cum ratione quibusdam quam deleniti omnis ipsum nam architecto nobis, voluptatem dolore odio expedita
        exercitationem. Labore sunt tempora corrupti rem provident fugiat magnam iure illum exercitationem voluptatum.
        Laborum beatae nihil sunt doloremque! Labore nihil corrupti sapiente. Ad repudiandae, possimus corporis rerum
        iure nam est deserunt eos fuga, tenetur repellat. Consectetur hic sed explicabo voluptates eaque saepe fugit.
      </Collapse>
    </div>
  )
}

export default meta
