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
      <img src="/img/greece.png" class="flag" />
      <img src="/img/us.png" class="flag" />
    </div>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">a little bit of:</h3>
    <div class="flex items-center gap-6">
      <img src="/img/sweden.png" class="flag" />
      <img src="/img/japan.png" class="flag" />
    </div>
    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I 'speak' these.</h2>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">mainly:</h3>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <i class="devicon-html5-plain"></i>
      <i class="devicon-css3-plain"></i>
      <i class="devicon-javascript-plain"></i>
      <i class="devicon-typescript-plain"></i>
      <i class="devicon-vuejs-plain"></i>
      <i class="devicon-tailwindcss-plain"></i>
    </div>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <i class="devicon-nodejs-plain"></i>
      <i class="devicon-nestjs-plain"></i>
      <i class="devicon-postgresql-plain"></i>
      <i class="devicon-mongodb-plain"></i>
    </div>
    <h3 class="font-serif text-lg xs:text-xl lg:text-2xl">a bit of:</h3>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <i class="devicon-react-plain"></i>
      <i class="devicon-python-plain"></i>
      <i class="devicon-bash-plain"></i>
    </div>
    <h2 class="mt-8 font-serif text-xl xs:text-2xl lg:text-3xl">I use these.</h2>
    <div class="flex items-center gap-4 text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
      <i class="devicon-apple-original"></i>
      <i class="devicon-linux-plain"></i>
      <i class="devicon-vscode-plain"></i>
      <i class="devicon-vim-plain"></i>
      <i class="devicon-git-plain"></i>
      <i class="devicon-github-plain"></i>
      <i class="devicon-docker-plain"></i>
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
