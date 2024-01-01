import '@acme/ui/styles.css'
import { Preview } from '@storybook/react'
import { withTailwindDarkMode } from './decorators'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [withTailwindDarkMode]

export default preview
