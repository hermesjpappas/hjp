<template>
  <div
    class="flex flex-col items-center justify-start flex-grow w-full max-w-xl bg-white shadow-lg rounded-xl"
  >
    <div class="w-full h-[150px] xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
      <a :href="props.cardInfo.link" target="_blank">
        <img
          :src="`/img/${props.cardInfo.img}`"
          class="object-cover object-top w-full h-full rounded-t-xl"
        />
      </a>
    </div>
    <div class="flex flex-col items-center justify-between w-full h-full gap-6 p-6">
      <div class="flex flex-col items-center gap-6">
        <h2>{{ props.cardInfo.title }}</h2>
        <p class="w-full">
          {{ props.cardInfo.description }}
        </p>
      </div>
      <div class="flex flex-col items-center w-full gap-6">
        <div class="flex items-center w-full gap-4">
          <span class="font-serif text-xs xs:text-base font-bold mt-0.5">Tech Used:</span>
          <i
            v-for="techItem in props.cardInfo.tech"
            :key="techItem"
            v-tooltip="techItem.name"
            :class="`devicon-${techItem.icon}-plain`"
          ></i>
        </div>
        <div class="flex items-center w-full gap-4">
          <span class="font-serif font-bold mt-0.5 text-xs xs:text-base">Links:</span>
          <a :href="props.cardInfo.github" target="_blank">
            <font-awesome-icon
              v-tooltip="'Github Project Link'"
              icon="fa-brands fa-github"
              class="text-xl xs:text-2xl sm:text-3xl"
            />
          </a>
          <a :href="props.cardInfo.link" target="_blank">
            <font-awesome-icon
              v-tooltip="'Project Live Link'"
              icon="fa-solid fa-globe"
              class="text-xl xs:text-2xl sm:text-3xl"
            />
          </a>
        </div>
        <p v-if="props.cardInfo.notes" class="flex items-center w-full gap-2">
          <span class="font-serif font-bold mt-0.5 text-xs xs:text-base">Notes:</span>
          <span>{{ props.cardInfo.notes }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cardInfo: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
i {
  @apply text-xl xs:text-2xl sm:text-3xl;
}
</style>
