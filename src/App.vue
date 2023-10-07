<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
</script>

<template>
<div class="relative w-screen h-screen bg-gray-200">
<NavBar/>
  <main>
    <RouterView />
  </main>
</div>
</template>
