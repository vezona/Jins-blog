<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const settings = ref({
  siteName: "Jins Blog",
  siteDescription: "記錄程式學習、投資理財、讀書心得",
  contactEmail: "",
  metaTitle: "Jins Blog",
  metaDescription: "記錄程式學習、投資理財、讀書心得",
  gaId: "",
  github: "",
  twitter: "",
  linkedin: "",
});

const handleSave = () => {
  // TODO: 實作儲存設定邏輯
  console.log("儲存設定:", settings.value);
};

useSeoMeta({
  title: "網站設定 - 後台 - Jins Blog",
  robots: "noindex, nofollow",
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">網站設定</h1>

    <div class="space-y-6">
      <!-- 基本設定 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">基本設定</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">網站名稱</label>
            <input
              v-model="settings.siteName"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">網站描述</label>
            <textarea
              v-model="settings.siteDescription"
              rows="3"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">聯絡信箱</label>
            <input
              v-model="settings.contactEmail"
              type="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>
        </div>
      </div>

      <!-- SEO 設定 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">SEO 設定</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2"
              >預設 Meta Title</label
            >
            <input
              v-model="settings.metaTitle"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2"
              >預設 Meta Description</label
            >
            <textarea
              v-model="settings.metaDescription"
              rows="2"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2"
              >Google Analytics ID</label
            >
            <input
              v-model="settings.gaId"
              type="text"
              placeholder="G-XXXXXXXXXX"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>
        </div>
      </div>

      <!-- 社群媒體 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">社群媒體</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">GitHub</label>
            <input
              v-model="settings.github"
              type="text"
              placeholder="https://github.com/username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Twitter</label>
            <input
              v-model="settings.twitter"
              type="text"
              placeholder="https://twitter.com/username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">LinkedIn</label>
            <input
              v-model="settings.linkedin"
              type="text"
              placeholder="https://linkedin.com/in/username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-green-700"
            />
          </div>
        </div>
      </div>

      <!-- 儲存按鈕 -->
      <div class="flex gap-4">
        <button
          @click="handleSave"
          class="px-6 py-3 bg-theme-green-700 text-white rounded-lg hover:bg-theme-green-800 transition"
        >
          儲存設定
        </button>
        <button
          type="button"
          class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          重置
        </button>
      </div>
    </div>
  </div>
</template>
