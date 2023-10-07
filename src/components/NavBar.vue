<template>
  <nav class="sticky top-0 right-0 flex flex-col items-center justify-start w-full h-20 gap-2 pt-2 bg-white shadow-md xs:pt-0 xs:justify-center xs:flex-row xs:h-14">
    <span class="pl-4 font-serif text-xl"><RouterLink to="/">hjp</RouterLink></span>
    <ul class="flex items-center justify-center w-full h-8 gap-8 font-medium xs:justify-end xs:pr-4">
      <li><RouterLink to="/">cv</RouterLink></li>
      <li><RouterLink to="/">code</RouterLink></li>
      <li><RouterLink to="/">my story</RouterLink></li>
      <li><RouterLink to="/">contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
