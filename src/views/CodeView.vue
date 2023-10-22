<template>
  <main
    class="flex flex-col items-center justify-start w-full min-h-full gap-4 px-6 pb-10 xs:gap-6 lg:gap-8 lg:text-lg lg:px-0"
  >
    <h1 class="mt-10">Ones and zeros.</h1>
    <h2>Also, much more.</h2>
    <p>
      Code can be used to solve problems, but it's also a creative outlet for me, especially when
      combined with front-end design.These are some of the projects I've worked on which should give
      you a decent idea of what I like to work on, as well as give you a hint of my skills. My
      portfolio will keep growing, so keep an eye out for new projects, or maybe even get in touch
      so we can work together!
    </p>

    <div class="flex flex-col flex-wrap justify-center w-full gap-8 lg:flex-row">
      <ProjectCard v-for="card in cardsInfoArray" :key="card.title" :cardInfo="card" />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const cardsInfoArray = [
  {
    img: 'countries.png',
    title: 'Countries Database',
    description:
      '"Around The World" uses the REST Countries API to get data about all the countries in the world. Built with React and Tailwind CSS, this app/site allows you to search for countries by name and filter them by region, as well as to click on each country to see a page with all of its details. You can click on any of the country\'s bordering flags to see that country\'s details as well, like a Wikipedia click rabbit-hole. It also features a dark mode toggle.',
    notes: 'This project is responsive for widths 280px and above.',
    tech: [
      {
        name: 'React',
        icon: 'react'
      },
      {
        name: 'Tailwind',
        icon: 'tailwindcss'
      }
    ],
    link: 'https://hjp-world.netlify.app/',
    github: 'https://github.com/hermesjpappas/react-countries'
  },
  {
    img: 'todo_js.png',
    title: 'To-Do List',
    description:
      'This is a simple to-do project made with vanilla JS, HTML and CSS. It taught me a lot about editable HTML elements (Try it yourself! You can edit the title, date, priority and description of every to-do item and the title of every project after creating them) and allowed me to integrate a bit more OOP into my JavaScript.',
    notes: 'This project is responsive for widths 500px and above.',
    tech: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      }
    ],
    link: 'https://hjp-to-do.netlify.app/',
    github: 'https://github.com/hermesjpappas/sha-to-do-list'
  },
  {
    img: 'murder.png',
    title: 'Murder Grill',
    description:
      'This is is a satirical webpage about a fictional grill place that is a little too enthusiastic about meat. It\'s made with vanilla JS, HTML and CSS. This project taught me more about breaking my code down to components and using npm and webpack to achieve that. Everything is dynamically loaded via JavaScript, including the tabs, which essentially make it a single-page website.',
      notes: 'This project is responsive for widths 320px and above.',
    tech: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      }
    ],
    link: 'https://hjp-murder.netlify.app/',
    github: 'https://github.com/hermesjpappas/sha-restaurant'
  },
  {
    img: 'calc_js.png',
    title: 'Javascript Calculator',
    description:
      'This is a calculator made with vanilla JS, HTML and CSS. It gives you the ability to keep calculating without having to press the equals key every time. It was the first time I combined HTML, CSS and JavaScript together, and it showed me some of the amazing power of regular expressions.',
      notes: 'This project functions properly on screens 1080p and above.',
    tech: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      }
    ],
    link: 'https://hjp-calc.netlify.app/',
    github: 'https://github.com/hermesjpappas/sha-js-calculator'
  },
  {
    img: 'weather.png',
    title: 'Weather App',
    description:
      'This is a weather app made with vanilla JS, HTML and CSS. It fetches weather data from an API upon search and displays some basic information about the weather of the city you searched for.',
      notes: 'This project is responsive for widths 320px and above.',
    tech: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      }
    ],
    link: 'https://hjp-weather.netlify.app/',
    github: 'https://github.com/hermesjpappas/sha-weather-app'
  },
  {
    img: 'etch_js.png',
    title: 'Javascript Etch-a-sketch',
    description:
      'This is a simple drawing app made with vanilla JS, HTML and CSS. The user can draw pixels while holding down the left mouse button. It taught me more about DOM manipulation, as well as the flexibility and power of CSS grid.',
      notes: 'This project functions properly on screens 1080p and above.',
    tech: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      }
    ],
    link: 'https://hjp-etch.netlify.app/',
    github: 'https://github.com/hermesjpappas/sha-js-etch-a-sketch'
  },
]
</script>

<style scoped>
p {
  @apply max-w-3xl;
}
</style>
