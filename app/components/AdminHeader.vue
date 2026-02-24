<template>
  <header class="bg-white border-b shadow-sm">
    <div class="px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <h1 class="text-xl font-bold text-theme-green-700">Jins Blog 後台</h1>
        </div>

        <div class="flex items-center gap-4">
          <NuxtLink
            to="/"
            target="_blank"
            class="text-sm text-gray-600 hover:text-theme-green-700 transition"
          >
            前往前台 ↗
          </NuxtLink>
          <button
            class="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition"
          >
            登出
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
