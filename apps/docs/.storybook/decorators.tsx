import { withThemeByClassName } from '@storybook/addon-themes'

export const withTailwindDarkMode = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
