<template>
  <nav class="absolute top-0 right-0 flex items-center w-full h-12 bg-white shadow-md">
    <span class="pl-4 font-serif text-xl"><RouterLink to="/">hjp</RouterLink></span>
    <ul class="flex items-center justify-end w-full gap-8 pr-4 font-medium">
      <li><RouterLink to="/"></RouterLink>cv</li>
      <li><RouterLink to="/">code</RouterLink></li>
      <li><RouterLink to="/">my story</RouterLink></li>
      <li><RouterLink to="/">contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
