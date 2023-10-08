<template>
  <main
    class="flex flex-col items-center justify-start w-full h-full gap-4 pb-8 xs:gap-6 lg:gap-8 lg:text-lg"
  >
    <h1 class="mt-10 font-serif text-3xl xs:text-4xl lg:text-5xl">Down to business.</h1>
    <h2 class="font-serif text-xl xs:text-2xl lg:text-3xl">The brass tacks.</h2>
    <article class="flex flex-col items-start justify-start gap-4 px-4 sm:items-center sm:px-0">
      <p>
        I am a software engineer (focused on web development) with additional experience in other
        fields.
      </p>
      <p>I thrive in creative environments where I can continue learning.</p>

      <p>You can see and download my CV in PDF form <a href="#">here.</a></p>
      <p>
        You can see some of my projects <RouterLink to="/code" class="link">here</RouterLink> and on
        my <a href="https://github.com/hermesjpappas" target="_blank">Github page</a>.
      </p>
      <p>For a shorter overview, scroll down below.</p>
    </article>

    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I speak these.</h2>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">native:</h3>
    <div class="flex items-center gap-6">
      <img v-tooltip="'Greek'" src="/img/greece.png" class="flag" />
      <img v-tooltip="'US English'" src="/img/us.png" class="flag" />
    </div>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">a little bit of:</h3>
    <div class="flex items-center gap-6">
      <img v-tooltip="'Swedish'" src="/img/sweden.png" class="flag" />
      <img v-tooltip="'Japanese'" src="/img/japan.png" class="flag" />
    </div>
    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I 'speak' these.</h2>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">mainly:</h3>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'HTML'" class="devicon-html5-plain"></i
      ></a>
      <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'CSS'" class="devicon-css3-plain"></i
      ></a>
      <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Javascript'" class="devicon-javascript-plain"></i
      ></a>
      <a href="https://www.typescriptlang.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Typescript'" class="devicon-typescript-plain"></i
      ></a>
      <a href="https://vuejs.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Vue'" class="devicon-vuejs-plain"></i
      ></a>
      <a href="https://tailwindcss.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Tailwind'" class="devicon-tailwindcss-plain"></i
      ></a>
    </div>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <a href="https://nodejs.org/en" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Node'" class="devicon-nodejs-plain"></i
      ></a>
      <a href="https://nestjs.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Nest'" class="devicon-nestjs-plain"></i
      ></a>
      <a href="https://www.postgresql.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'PostgreSQL'" class="devicon-postgresql-plain"></i
      ></a>
      <a href="https://www.mongodb.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'MongoDB'" class="devicon-mongodb-plain"></i
      ></a>
    </div>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">a bit of:</h3>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <a href="https://reactjs.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'React'" class="devicon-react-plain"></i
      ></a>
      <a href="https://www.python.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Python'" class="devicon-python-plain"></i
      ></a>
      <a href="https://www.gnu.org/software/bash/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Bash / Shell'" class="devicon-bash-plain"></i
      ></a>
    </div>
    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I use these.</h2>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <a href="https://www.apple.com/macos/sonoma/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Mac OS'" class="devicon-apple-original"></i
      ></a>
      <a href="https://www.linux.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Linux'" class="devicon-linux-plain"></i
      ></a>
      <a href="https://code.visualstudio.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'VS Code'" class="devicon-vscode-plain"></i
      ></a>
      <a href="https://www.vim.org/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Vim'" class="devicon-vim-plain"></i
      ></a>
      <a href="https://git-scm.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Git'" class="devicon-git-plain"></i
      ></a>
      <a href="https://github.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Github'" class="devicon-github-plain"></i
      ></a>
      <a href="https://www.docker.com/" target="_blank" class="hover:no-underline"
        ><i v-tooltip="'Docker'" class="devicon-docker-plain"></i
      ></a>
    </div>
    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I studied here.</h2>
    <div class="flex flex-col items-start justify-center gap-4 pb-14 md:gap-6">
      <div class="flex items-center justify-start gap-6">
        <font-awesome-icon
          icon="fa-solid fa-laptop-code"
          class="text-2xl xs:text-3xl md:text-5xl"
        />
        <div class="flex flex-col">
          <p>Web Development Bootcamp</p>
          <p>
            <a href="https://socialhackersacademy.org/" target="_blank">Social Hackers Academy</a>,
            Greece
          </p>
        </div>
      </div>
      <div class="flex items-center justify-start gap-6">
        <font-awesome-icon
          icon="fa-solid fa-graduation-cap"
          class="text-2xl xs:text-3xl md:text-5xl"
        />
        <div class="flex flex-col">
          <p>MSc in Human-Computer Interaction</p>
          <p><a href="https://kth.se/" target="_blank">KTH</a>, Sweden</p>
        </div>
      </div>
      <div class="flex items-center justify-start gap-6">
        <font-awesome-icon
          icon="fa-solid fa-graduation-cap"
          class="text-2xl xs:text-3xl md:text-5xl"
        />
        <div class="flex flex-col">
          <p>BSc in Computer Science</p>
          <p><a href="https://www.essex.ac.uk/" target="_blank">University of Essex</a>, UK</p>
        </div>
      </div>
    </div>
  </main>
</template>
