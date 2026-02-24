<template>
  <aside class="w-64 bg-white border-r min-h-screen">
    <nav class="p-4">
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/admin"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-theme-green-50 transition"
            active-class="bg-theme-green-700 text-white hover:bg-theme-green-800"
          >
            <span>📊</span>
            <span>儀表板</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/admin/posts"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-theme-green-50 transition"
            active-class="bg-theme-green-700 text-white hover:bg-theme-green-800"
          >
            <span>📝</span>
            <span>文章管理</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/admin/posts/create"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-theme-green-50 transition"
            active-class="bg-theme-green-700 text-white hover:bg-theme-green-800"
          >
            <span>✏️</span>
            <span>新增文章</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/admin/settings"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-theme-green-50 transition"
            active-class="bg-theme-green-700 text-white hover:bg-theme-green-800"
          >
            <span>⚙️</span>
            <span>網站設定</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>
