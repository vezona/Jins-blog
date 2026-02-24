import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 包含 Tailwind / Windi CSS 的語法支援
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      'theme-green': {
        50: '#f0f5f3',
        100: '#dce8e3',
        200: '#b9d1c7',
        300: '#96baab',
        400: '#73a38f',
        500: '#608b7a',
        600: '#4E6E62',
        700: '#4E6E62', // 主題色
        800: '#3a5249',
        900: '#273631',
      }
    }
  },
  // 預掃描常用的工具類別，減少 FOUC
  safelist: [
    'min-h-screen',
    'flex',
    'flex-col',
    'container',
    'mx-auto',
    'px-4',
    'py-8',
    'bg-white',
    'border',
    'rounded-lg',
    'shadow',
  ]
})
