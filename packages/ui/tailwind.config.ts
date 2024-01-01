/* eslint-disable-next-line import/no-extraneous-dependencies -- dev dependency */
import type { Config } from 'tailwindcss'
/* eslint-disable-next-line import/no-extraneous-dependencies -- dev dependency */
import { themePlugin } from '@acme/theme'

const config: Pick<
  Config,
  'prefix' | 'presets' | 'content' | 'darkMode' | 'plugins'
> = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  // prefix: 'ui-',
  plugins: [themePlugin],
}

export default config
