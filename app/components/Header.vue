<template>
  <header class="border-b">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold btn-green">
          Jins Blog
        </NuxtLink>

        <ul class="flex gap-6">
          <li>
            <NuxtLink
              to="/"
              class="custom-link-primary"
              active-class="custom-link-active-primary"
            >
              首頁
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="custom-link-primary"
              active-class="custom-link-active-primary"
            >
              部落格
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="custom-link-primary"
              active-class="custom-link-active-primary"
            >
              關於
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
