<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-theme-green-50 to-theme-green-100 px-4"
  >
    <div class="max-w-md w-full">
      <!-- Logo or Title -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-theme-green-900">Jins Blog</h1>
        <p class="text-theme-green-700 mt-2">後台管理登入</p>
      </div>

      <!-- Login Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <!-- Email Login Form -->
        <form @submit.prevent="handleEmailLogin" class="space-y-4">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="your@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-green-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              密碼
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-green-500 focus:border-transparent outline-none transition"
            />
          </div>

          <!-- Error Message -->
          <div
            v-if="error"
            class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
          >
            {{ error }}
          </div>

          <!-- Success Message -->
          <div
            v-if="success"
            class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
          >
            {{ success }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-theme-green-700 text-white py-3 rounded-lg font-semibold hover:bg-theme-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? "登入中..." : "登入" }}
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">或</span>
          </div>
        </div>

        <!-- OAuth Login -->
        <button
          @click="handleGithubLogin"
          :disabled="loading"
          class="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          使用 GitHub 登入
        </button>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/"
            class="text-theme-green-700 hover:text-theme-green-800 text-sm"
          >
            ← 返回首頁
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");
const success = ref("");

// 如果已登入，導向後台
watchEffect(() => {
  if (user.value) {
    navigateTo("/admin");
  }
});

const handleEmailLogin = async () => {
  loading.value = true;
  error.value = "";
  success.value = "";

  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (signInError) throw signInError;

    success.value = "登入成功！導向中...";
    setTimeout(() => {
      navigateTo("/admin");
    }, 1000);
  } catch (err: any) {
    error.value = err.message || "登入失敗，請檢查您的 Email 和密碼";
  } finally {
    loading.value = false;
  }
};

const handleGithubLogin = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (signInError) throw signInError;
  } catch (err: any) {
    error.value = err.message || "GitHub 登入失敗";
    loading.value = false;
  }
};

useSeoMeta({
  title: "登入 - Jins Blog",
  description: "登入 Jins Blog 後台管理系統",
});
</script>
