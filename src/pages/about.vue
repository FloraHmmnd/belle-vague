<template>
  <div class="min-h-screen flex flex-col relative">
    <div class="flex-1 bg-neutral">
      <RouterLink to="/" class="sticky top-0">
        <ReturnBtn />
      </RouterLink>
      <p class="text-gradient text-2xl font-quicksand p-6 leading-relaxed">
        Hi! I'm <span class="font-bold">Flora Hommand</span>, a frontend developer based in
        <span class="italic">Marseille, France</span>. I specialize in
        <span class="font-semibold">Vue.js</span> and <span class="font-semibold">TypeScript</span>,
        but I’m always eager to explore and learn new technologies.

        <br /><br />
        Originally a visual artist, I discovered programming by creating generative artworks. Since
        then, I have been fascinated by the innovative and creative potential of coding, and I bring
        that creativity into every project I work on.

        <br /><br />
        I thrive in collaborative environments and love contributing as a true team player. I enjoy
        iterating quickly, turning ideas into working solutions fast while keeping a focus on
        quality and usability.

        <br /><br />
        Want to know more? Feel free to connect with me on
        <a
          href="https://www.linkedin.com/in/flora-hommand/"
          target="_blank"
          class="hover:underline"
        >
          LinkedIn
        </a>
        and reach out directly!
      </p>
    </div>
    <Footer />
  </div>
</template>
