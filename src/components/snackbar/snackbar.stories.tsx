import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button/button'

import { useSnackbar } from './snackbar-provider'

const SnackbarDemo = () => {
  const snackbar = useSnackbar()

  return (
    <div className='sb-row'>
      <Button onClick={() => snackbar.info('Информация', 'Дополнительное описание')}>Информация</Button>
      <Button onClick={() => snackbar.success('Успех', 'Дополнительное описание')}>Успех</Button>
      <Button onClick={() => snackbar.warning('Предупреждение', 'Дополнительное описание')}>Предупреждение</Button>
      <Button onClick={() => snackbar.error('Ошибка', 'Дополнительное описание')}>Ошибка</Button>
    </div>
  )
}

const meta: Meta<typeof SnackbarDemo> = {
  title: 'Feedback/Snackbar',
  component: SnackbarDemo,
}

export const Default: StoryObj<typeof SnackbarDemo> = {}

export default meta
