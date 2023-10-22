<template>
  <nav
    class="sticky top-0 right-0 flex flex-col items-center justify-start w-full h-20 gap-2 pt-2 bg-white shadow-md xs:pt-0 xs:justify-center xs:flex-row xs:h-14"
  >
    <RouterLink to="/" class="flex items-center gap-2 pl-5 font-serif text-xl hover:no-underline">
      <font-awesome-icon icon="fa-solid fa-code" class="h-4" />
      <span>hjp</span></RouterLink
    >
    <ul
      class="flex items-center justify-center w-full h-8 gap-8 font-medium xs:justify-end xs:pr-6"
    >
      <li><RouterLink to="/cv">cv</RouterLink></li>
      <li><RouterLink to="/code">code</RouterLink></li>
      <li><RouterLink to="/story">my story</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
