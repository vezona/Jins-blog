<template>
  <footer class="border-t mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-bold text-lg mb-4">Jins Blog</h3>
          <p class="text-gray-600">
            記錄程式學習、投資理財、讀書心得
          </p>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">快速連結</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-blue-600">
                首頁
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-600 hover:text-blue-600">
                部落格
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600">
                關於
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">社群媒體</h3>
          <div class="flex gap-4">
            <!-- 可以加入社群媒體連結 -->
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t text-center text-gray-600">
        <p>&copy; {{ currentYear }} Jins Blog. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
