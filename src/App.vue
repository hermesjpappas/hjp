<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100">
    <NavBar />
    <main class="flex-1 top-20 xs:top-14">
      <RouterView />
    </main>
  </div>
</template>
