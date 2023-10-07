<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="w-screen h-screen bg-gray-100">
    <NavBar />
    <main class="w-full h-full">
      <RouterView />
    </main>
  </div>
</template>
