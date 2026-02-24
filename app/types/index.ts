/**
 * 部落格文章型別定義
 */
export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  author: string
  publishedAt: string
  updatedAt: string
  category: string
  tags: string[]
  views: number
}

/**
 * 文章分類型別
 */
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

/**
 * 標籤型別
 */
export interface Tag {
  id: string
  name: string
  slug: string
}
