/**
 * 使用文章資料的 composable
 */
export const useBlog = () => {
  // 這裡可以加入從 Supabase 獲取文章的邏輯
  const fetchPosts = async () => {
    // TODO: 實作從 Supabase 獲取文章
    return []
  }

  const fetchPost = async (slug: string) => {
    // TODO: 實作從 Supabase 獲取單篇文章
    return null
  }

  return {
    fetchPosts,
    fetchPost
  }
}
