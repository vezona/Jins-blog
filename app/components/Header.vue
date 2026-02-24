<template>
  <header class="border-b">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">
          Jins Blog
        </NuxtLink>
        
        <ul class="flex gap-6">
          <li>
            <NuxtLink 
              to="/" 
              class="hover:text-blue-600 transition"
              active-class="text-blue-600 font-semibold"
            >
              首頁
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/blog" 
              class="hover:text-blue-600 transition"
              active-class="text-blue-600 font-semibold"
            >
              部落格
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              class="hover:text-blue-600 transition"
              active-class="text-blue-600 font-semibold"
            >
              關於
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
