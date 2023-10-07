<template>
  <main class="flex flex-col items-center justify-center w-full h-full font-serif">
    <h1 class="text-3xl sm:text-5xl lg:text-7xl">Hello!</h1>
    <h1 class="text-3xl sm:text-5xl lg:text-7xl">I'm Hermes.</h1>
    <h2 class="mt-8 font-sans text-xl lg:mt-10 sm:text-3xl lg:text-5xl">Nice to meet you.</h2>
    
    <div class="flex items-center justify-center gap-4 mt-8 text-xl text-gray-600 md:mt-10 lg:mt-12 xs:gap-6 md:gap-8 lg:gap-12 xs:text-2xl md:text-3xl lg:text-4xl">
    <font-awesome-icon icon="fa-brands fa-github" />
    <font-awesome-icon icon="fa-brands fa-linkedin" />
    <font-awesome-icon icon="fa-brands fa-square-x-twitter" />
    <font-awesome-icon icon="fa-solid fa-envelope" />
    </div>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
