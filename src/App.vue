<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100">
    <NavBar />
    <main class="flex-1 overflow-y-auto top-20 xs:top-14">
      <RouterView />
    </main>
  </div>
</template>

<style>
a {
  @apply font-semibold;
}

a:hover {
  @apply underline text-gray-600
}
/* 
.link {
  @apply font-semibold text-gray-500;
}

.link:hover {
  @apply underline text-gray-600
} */

.flag {
  @apply w-24 h-14 xs:w-28 xs:h-16 md:w-32 md:h-20 rounded-md border-2 border-gray-700
}
</style>
