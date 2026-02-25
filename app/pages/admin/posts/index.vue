<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">文章管理</h1>
      <NuxtLink
        to="/admin/posts/create"
        class="px-6 py-2 bg-theme-green-700 text-white rounded-lg hover:bg-theme-green-800 transition"
      >
        新增文章
      </NuxtLink>
    </div>

    <!-- 篩選與搜尋 -->
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="flex gap-4">
        <input
          type="text"
          placeholder="搜尋文章..."
          class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
        />
        <select
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
        >
          <option>所有狀態</option>
          <option>已發布</option>
          <option>草稿</option>
        </select>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 border-b">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              標題
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              分類
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              狀態
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              日期
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              操作
            </th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td colspan="5" class="px-6 py-8 text-center text-gray-500">
              目前沒有文章
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin"
});

useSeoMeta({
  title: "文章管理 - 後台 - Jins Blog",
  robots: "noindex, nofollow",
});
</script>
