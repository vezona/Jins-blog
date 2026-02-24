<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">部落格文章</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 文章卡片範例 -->
      <article class="border rounded-lg p-6 hover:shadow-lg transition">
        <h2 class="text-2xl font-bold mb-2">文章標題</h2>
        <p class="text-gray-600 mb-4">文章摘要...</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">2024-01-01</span>
          <NuxtLink to="/blog/example-post" class="text-blue-600 hover:underline">
            閱讀更多 →
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '部落格文章 - Jins Blog',
  description: '瀏覽所有部落格文章',
})
</script>
