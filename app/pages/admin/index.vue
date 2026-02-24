<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">後台管理</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 統計卡片 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-500 text-sm mb-2">總文章數</h3>
        <p class="text-3xl font-bold text-theme-green-700">0</p>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-500 text-sm mb-2">總瀏覽數</h3>
        <p class="text-3xl font-bold text-theme-green-700">0</p>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-gray-500 text-sm mb-2">草稿數</h3>
        <p class="text-3xl font-bold text-theme-green-700">0</p>
      </div>
    </div>

    <!-- 快捷操作 -->
    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">快捷操作</h2>
      <div class="flex gap-4">
        <NuxtLink
          to="/admin/posts/create"
          class="px-6 py-3 bg-theme-green-700 text-white rounded-lg hover:bg-theme-green-800 transition"
        >
          新增文章
        </NuxtLink>
        <NuxtLink
          to="/admin/posts"
          class="px-6 py-3 border border-theme-green-700 text-theme-green-700 rounded-lg hover:bg-theme-green-50 transition"
        >
          管理文章
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

useSeoMeta({
  title: "後台管理 - Jins Blog",
  robots: "noindex, nofollow", // 後台不要被搜尋引擎索引
});
</script>
