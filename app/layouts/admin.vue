<script setup lang="ts">
// 可以在這裡加入權限驗證邏輯
onMounted(() => {
  // TODO: 檢查是否已登入，未登入則導向登入頁
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AdminHeader />
    <div class="flex">
      <AdminSidebar />
      <main class="flex-1 p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
