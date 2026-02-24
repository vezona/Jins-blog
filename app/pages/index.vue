<template>
  <div class="container mx-auto px-4 py-8">
    <section class="text-center py-20">
      <h1 class="text-5xl font-bold mb-4 text-theme-700">歡迎來到 Jins Blog</h1>
      <p class="text-xl text-gray-600 mb-8">記錄程式學習、投資理財、讀書心得</p>
      <NuxtLink to="/blog" class="btn btn-primary"> 閱讀文章 </NuxtLink>
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">最新文章</h2>
      <!-- 文章列表將在這裡顯示 -->
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Jins Blog - 程式學習、投資理財、讀書心得",
  description: "個人部落格，分享程式開發、投資理財與閱讀心得",
  ogTitle: "Jins Blog",
  ogDescription: "個人部落格，分享程式開發、投資理財與閱讀心得",
});
</script>
