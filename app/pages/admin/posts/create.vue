<script setup lang="ts">
definePageMeta({
  layout: "admin"
});

const form = ref({
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  content: "",
});

const handleSubmit = () => {
  // TODO: 實作發布文章邏輯
  console.log("發布文章:", form.value);
};

useSeoMeta({
  title: "新增文章 - 後台 - Jins Blog",
  robots: "noindex, nofollow",
});
</script>

<template>
  <div>
    <div class="mb-6">
      <NuxtLink
        to="/admin/posts"
        class="text-theme-green-700 hover:underline mb-4 inline-block"
      >
        ← 返回文章列表
      </NuxtLink>
      <h1 class="text-3xl font-bold">新增文章</h1>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- 標題 -->
      <div class="bg-white rounded-lg shadow p-6">
        <label class="block text-sm font-medium mb-2">文章標題</label>
        <input
          v-model="form.title"
          type="text"
          placeholder="輸入文章標題..."
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
          required
        />
      </div>

      <!-- Slug -->
      <div class="bg-white rounded-lg shadow p-6">
        <label class="block text-sm font-medium mb-2">網址代稱 (Slug)</label>
        <input
          v-model="form.slug"
          type="text"
          placeholder="example-post"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
          required
        />
      </div>

      <!-- 文章分類 -->
      <div class="bg-white rounded-lg shadow p-6">
        <label class="block text-sm font-medium mb-2">分類</label>
        <select
          v-model="form.category"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
        >
          <option value="">選擇分類</option>
          <option value="programming">程式學習</option>
          <option value="investment">投資理財</option>
          <option value="reading">讀書心得</option>
        </select>
      </div>

      <!-- 摘要 -->
      <div class="bg-white rounded-lg shadow p-6">
        <label class="block text-sm font-medium mb-2">摘要</label>
        <textarea
          v-model="form.excerpt"
          rows="3"
          placeholder="文章摘要..."
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
        ></textarea>
      </div>

      <!-- 內容編輯器 -->
      <div class="bg-white rounded-lg shadow p-6">
        <label class="block text-sm font-medium mb-2">內容</label>
        <div class="border rounded-lg p-4 min-h-[400px]">
          <!-- TipTap 編輯器將在這裡整合 -->
          <textarea
            v-model="form.content"
            rows="15"
            placeholder="文章內容..."
            class="w-full focus:outline-none"
          ></textarea>
        </div>
      </div>

      <!-- 操作按鈕 -->
      <div class="flex gap-4">
        <button
          type="submit"
          class="px-6 py-3 bg-theme-green-700 text-white rounded-lg hover:bg-theme-green-800 transition"
        >
          發布文章
        </button>
        <button
          type="button"
          class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          儲存草稿
        </button>
        <NuxtLink
          to="/admin/posts"
          class="px-6 py-3 text-gray-600 hover:text-gray-800 transition"
        >
          取消
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
