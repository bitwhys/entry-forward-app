import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const createPlugin = (api?: any) => {}
// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
        'dim-conic':
          'conic-gradient(from 360deg at 50% 50%, #a853ba 0deg, #2a8af6  360deg, #e92a67 180deg)',
      },
    },
  },
  plugins: [],
}

export const themePlugin = plugin(createPlugin, config)

export default config
