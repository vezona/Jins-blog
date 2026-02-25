<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

useSeoMeta({
  title: `${slug} - Jins Blog`,
  description: "文章內容描述",
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <article class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">{{ slug }}</h1>
      <div class="text-gray-600 mb-8">
        <time>2024-01-01</time>
      </div>

      <div class="prose max-w-none">
        <p>這是文章內容...</p>
      </div>
    </article>
  </div>
</template>
