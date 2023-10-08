<template>
  <main class="flex flex-col items-center justify-center w-full h-full font-serif">
    <h1 class="text-3xl sm:text-5xl lg:text-7xl">Hello!</h1>
    <h1 class="text-3xl sm:text-5xl lg:text-7xl">I'm Hermes.</h1>
    <h2 class="mt-8 font-sans text-xl lg:mt-10 sm:text-3xl lg:text-5xl">Nice to meet you.</h2>

    <div
      class="flex items-center justify-center gap-4 mt-8 text-xl text-gray-600 md:mt-10 lg:mt-12 xs:gap-6 md:gap-8 lg:gap-12 xs:text-2xl md:text-3xl lg:text-4xl"
    >
      <a href="https://github.com/hermesjpappas" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-github"
      /></a>
      <a href="https://www.linkedin.com/in/hermesjpappas/" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin"
      /></a>
      <a href="https://twitter.com/hjp_dev" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-square-x-twitter"
      /></a>
      <a href="mailto:hjp@hjp.gr"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
    </div>

    <RouterLink
      to="/cv"
      class="flex items-center gap-4 px-6 py-2 mt-10 font-sans font-semibold text-white bg-black rounded-full"
    >
      <span class="pb-1">About me</span><font-awesome-icon icon="fa-solid fa-arrow-right"
    /></RouterLink>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
