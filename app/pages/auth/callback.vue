<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <div class="text-center">
        <div
          v-if="loading"
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-green-700 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 mb-4">{{ status }}</p>

        <div class="mt-6 text-left bg-gray-50 p-4 rounded text-xs">
          <p class="font-bold mb-2">資訊：</p>
          <p>User: {{ user ? "已登入" : "未登入" }}</p>
          <p v-if="user">Email: {{ user.email }}</p>
          <p v-if="error" class="text-red-600 mt-2">錯誤: {{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const loading = ref(true);
const status = ref("正在處理 GitHub 登入...");
const error = ref("");

onMounted(async () => {
  try {
    // 检查 URL 中的 hash fragment（Supabase 会把 token 放在这里）
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");

    console.log("Callback URL:", window.location.href);
    console.log("Access Token:", accessToken ? "存在" : "不存在");
    console.log("Refresh Token:", refreshToken ? "存在" : "不存在");

    if (accessToken) {
      status.value = "正在設置 Session...";

      // 手动设置 session
      const { data, error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken || "",
      });

      if (sessionError) {
        throw sessionError;
      }

      console.log("Session 設置成功:", data);
      status.value = "登入成功！導向後台...";

      // 等待 user 状态更新
      await new Promise((resolve) => setTimeout(resolve, 500));

      router.push("/admin");
    } else {
      // 没有 access_token，可能是使用 code flow
      status.value = "檢查登入狀態...";

      // 等待一下看 user 是否自动更新
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (user.value) {
        status.value = "登入成功！導向後台...";
        router.push("/admin");
      } else {
        throw new Error("未能獲取登入資訊");
      }
    }
  } catch (err: any) {
    console.error("Callback 錯誤:", err);
    error.value = err.message;
    status.value = "登入失敗";
    loading.value = false;

    // 3 秒后返回登入页
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  }
});
</script>
