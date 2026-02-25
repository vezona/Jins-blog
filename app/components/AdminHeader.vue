<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const loading = ref(false);

const getInitials = (email: string) => {
  return email.substring(0, 2).toUpperCase();
};

const handleLogout = async () => {
  loading.value = true;
  try {
    await supabase.auth.signOut();
    navigateTo("/login");
  } catch (error) {
    console.error("登出失敗:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <header class="bg-white border-b shadow-sm">
    <div class="px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <h1 class="text-xl font-bold text-theme-green-700">Jins Blog 後台</h1>
        </div>

        <div class="flex items-center gap-4">
          <!-- 使用者資訊 -->
          <div v-if="user" class="flex items-center gap-3">
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">
                {{ user.user_metadata?.full_name || user.email }}
              </p>
              <p class="text-xs text-gray-500">{{ user.email }}</p>
            </div>
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
            <div
              v-else
              class="w-10 h-10 rounded-full bg-theme-green-700 flex items-center justify-center text-white font-semibold"
            >
              {{ getInitials(user.email || "") }}
            </div>
          </div>

          <NuxtLink
            to="/"
            target="_blank"
            class="text-sm text-gray-600 hover:text-theme-green-700 transition"
          >
            前往前台 ↗
          </NuxtLink>
          <button
            @click="handleLogout"
            :disabled="loading"
            class="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
          >
            {{ loading ? "登出中..." : "登出" }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
