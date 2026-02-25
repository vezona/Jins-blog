# GitHub Copilot 指令

## 專案概述

這是一個使用 Nuxt 4 建立的部落格系統，具有管理後台功能。

## 技術棧

- **框架**: Nuxt 4 (Vue 3)
- **包管理器**: pnpm
- **CSS**: UnoCSS
- **認證與資料庫**: Supabase
- **語言**: TypeScript

## 開發規範

### 程式碼風格

- 使用 TypeScript 進行類型安全的開發
- 使用 Composition API (`<script setup>`) 而非 Options API
- 組件使用 PascalCase 命名
- 檔案和資料夾使用 kebab-case 命名

### Vue 檔案結構

Vue 單文件組件（SFC）必須遵守以下區塊順序：

```vue
<script setup lang="ts">
// 組件邏輯
</script>

<template>
  <!-- 模板內容 -->
</template>

<style scoped>
/* 樣式（如有需要） */
</style>
```

- `<script setup lang="ts">` 區塊必須放在最上方
- `<template>` 區塊放在中間
- `<style scoped>` 區塊放在最下方（如有需要）

### Vue/Nuxt 最佳實踐

- 優先使用 Nuxt 4 的 auto-imports（composables、utils、components）
- 使用 `definePageMeta` 定義頁面元數據
- 使用 Nuxt 的檔案系統路由
- 使用 `useFetch` 或 `useAsyncData` 進行資料獲取
- 組件應該是小而專注的，遵循單一職責原則

### 樣式規範

- 優先使用 UnoCSS 的 utility classes
- 避免使用內聯樣式，除非必要
- 保持樣式的一致性和可維護性

### 認證與安全

- 使用 Supabase 進行用戶認證
- 保護需要認證的路由（使用 middleware）
- 不要在客戶端暴露敏感資訊

### 命名慣例

- **組件**: `AdminHeader.vue`, `BlogPost.vue`
- **Composables**: `useBlog.ts`, `useAuth.ts`
- **頁面**: 使用小寫和連字符（kebab-case）
- **類型**: 使用 PascalCase，定義在 `types/` 目錄

### 檔案組織

```
app/
  ├── components/     # 可重用組件
  ├── composables/    # 組合式函數
  ├── layouts/        # 布局文件
  ├── middleware/     # 路由中間件
  ├── pages/          # 頁面（自動路由）
  ├── types/          # TypeScript 類型定義
  └── utils/          # 工具函數
```

### 注釋與文檔

- 為複雜的邏輯添加註釋
- 為公共函數和組合式函數添加 JSDoc 註釋
- 保持註釋簡潔且有意義

### 錯誤處理

- 適當處理異步操作的錯誤
- 為用戶提供友好的錯誤訊息
- 使用 try-catch 或 `.catch()` 處理 Promise 錯誤

## 偏好設置

- 使用繁體中文進行註釋和使用者介面文字
- 代碼邏輯優先考慮可讀性和可維護性
- 遵循 Vue 3 和 Nuxt 4 的官方建議和最佳實踐
