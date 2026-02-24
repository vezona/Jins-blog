import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
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
  shortcuts: [
    // 靜態 shortcuts - 使用完全展开的形式
    // 踩雷：如果用一些保留字link、text、border 會被吃不到
    { 
      'btn': 'px-4 py-2 rounded inline-block font-medium transition-colors duration-200',
      'btn-primary': 'bg-theme-700 text-white hover:bg-theme-800',
      'custom-link-primary': 'hover:text-theme-700 transition-colors',
      'custom-link-active-primary': 'text-theme-700 font-bold',
    },

    // 動態 shortcuts - 按鈕顏色變化
    // [/^btn-(.*)$/, ([, c]) => `px-4 py-2 rounded inline-block font-medium transition-colors duration-200 bg-${c}-500 text-white hover:bg-${c}-600`],
  ],
  theme: {
    colors: {
      // 踩雷：key 必須小駝峰，不可以用-連
      'theme': {
        '700': '#4E6E62', // 主題色
        '800': '#3a5249'
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
