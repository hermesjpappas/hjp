<template>
  <main class="flex flex-col items-center justify-center w-full h-full font-serif">
    <h1>Oops!</h1>
    <h3 class="mt-8 font-sans lg:mt-10">Looks like what you're looking for is not here.</h3>


    <RouterLink
      to="/"
      class="flex items-center gap-4 px-6 py-2 mt-10 font-sans font-semibold text-white bg-black border-2 border-black rounded-full hover:text-black hover:bg-white hover:no-underline hover:animate-wiggle hover:animate-infinite"
    >
    <font-awesome-icon icon="fa-solid fa-arrow-left"/><span class="pb-1">Back to the main page</span></RouterLink
    >
  </main>
</template>

<script setup lang="ts">

</script>
