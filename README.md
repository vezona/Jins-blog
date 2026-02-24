# Jins Blog

個人部落格，記錄程式學習、投資理財、讀書心得。

## Tech Stack

### 核心框架

- **Nuxt 4** - Vue 3 Composition API + TypeScript
- **UnoCSS** - Tailwind CSS 語法支援

### 編輯器 / 後台

- **TipTap** - Rich Text Editor（Headless，自訂 UI）

### 後端 / API

- **Nuxt Server Routes** (`/server/api`)
- **Supabase** - PostgreSQL + Auth + Storage + RLS

### 部署 / 網路

- **Vercel** - Nuxt Hosting
- **Cloudflare** - DNS + SSL + CDN

### SEO / 內容

- `useSeoMeta` + sitemap.xml + robots.txt
- Open Graph + JSON-LD

## 前置需求

- Node.js 18+
- pnpm 8+

## 開始使用

### 1. Clone 專案

```bash
git clone https://github.com/your-username/Jins-blog.git
cd Jins-blog
```

### 2. 安裝依賴

```bash
pnpm install
```

### 3. 啟動開發伺服器

```bash
pnpm dev
```

開發伺服器將在 `http://localhost:3000` 啟動

### 4. 環境變數設定（選用）

建立 `.env` 檔案並設定 Supabase 連線資訊：

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

## 可用指令

```bash
# 開發模式（熱重載）
pnpm dev

# 建置正式環境
pnpm build

# 預覽正式建置
pnpm preview

# 生成靜態網站
pnpm generate

# 型別檢查
pnpm typecheck

# Lint 檢查
pnpm lint
```
