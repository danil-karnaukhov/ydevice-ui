import type { Preview } from '@storybook/react-vite'

import { SnackbarProvider } from '../src/components/snackbar/snackbar-provider'

import '../src/styles/fonts.scss'
import '../src/styles/index.scss'
import './preview.scss'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Inputs', 'Data display', 'Navigation', 'Feedback', 'Miscellaneous'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    ),
  ],
}

export default preview
