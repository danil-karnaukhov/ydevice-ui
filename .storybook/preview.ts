import type { Preview } from '@storybook/react-vite'

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
}

export default preview
