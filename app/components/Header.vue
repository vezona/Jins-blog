<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const loading = ref(false);

const handleLogout = async () => {
  loading.value = true;
  try {
    await supabase.auth.signOut();
    navigateTo("/");
  } catch (error) {
    console.error("登出失敗:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <header class="border-b">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-theme-700">
          Jins Blog 老金札記
        </NuxtLink>

        <div class="flex items-center gap-6">
          <ul class="flex gap-6">
            <li>
              <NuxtLink
                to="/"
                class="custom-link-primary"
                active-class="custom-link-active-primary"
              >
                首頁
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="custom-link-primary"
                active-class="custom-link-active-primary"
              >
                部落格
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="custom-link-primary"
                active-class="custom-link-active-primary"
              >
                關於
              </NuxtLink>
            </li>
          </ul>

          <!-- 登入/登出按鈕 -->
          <div class="flex items-center gap-3 border-l pl-6">
            <template v-if="user">
              <!-- 已登入 -->
              <div
                v-if="user.user_metadata?.avatar_url"
                class="w-10 h-10 rounded-full overflow-hidden bg-gray-200"
              >
                <img
                  :src="user.user_metadata.avatar_url"
                  :alt="user.email"
                  class="w-full h-full object-cover"
                />
              </div>
              <NuxtLink
                to="/admin"
                class="px-4 py-2 text-sm bg-theme-700 text-white rounded-lg hover:bg-theme-800 transition"
              >
                後台
              </NuxtLink>
              <button
                @click="handleLogout"
                :disabled="loading"
                class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
              >
                {{ loading ? "登出中..." : "登出" }}
              </button>
            </template>
            <template v-else>
              <!-- 未登入 -->
              <NuxtLink to="/login" class="btn btn-primary"> 登入 </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
