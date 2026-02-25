export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  // 只保護 /admin 開頭的路由
  if (to.path.startsWith('/admin')) {
    // 如果未登入，導向登入頁
    if (!user.value) {
      return navigateTo('/login')
    }
  }

  // 如果已登入且訪問登入頁，導向後台
  if (to.path === '/login' && user.value) {
    return navigateTo('/admin')
  }

  // OAuth callback 後自動導向後台
  if (to.path === '/auth/callback' && user.value) {
    return navigateTo('/admin')
  }
})
