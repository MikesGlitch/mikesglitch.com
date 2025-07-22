<template>
  <div class="relative min-h-screen">
    <!-- Hero Section with Modern Gradient Background -->
    <div
      class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-primary-950"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-float dark:bg-primary-800"
        />
        <div
          class="absolute top-40 right-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000 dark:bg-secondary-800"
        />
        <div
          class="absolute -bottom-8 left-40 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000 dark:bg-accent-800"
        />
      </div>

      <div class="relative container mx-auto px-6 pt-20 pb-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          <!-- Content Column -->
          <div class="space-y-8 animate-slide-up">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-primary-200 dark:border-primary-700"
            >
              <div
                class="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3 animate-pulse"
              />
              <span
                class="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >Available for hire</span>
            </div>

            <!-- Main Heading -->
            <div class="space-y-4">
              <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm <span class="gradient-text">Mike</span>
              </h1>
              <div
                class="text-2xl md:text-3xl font-medium text-neutral-600 dark:text-neutral-300"
              >
                I'm a <TextTypewriter class="gradient-text font-bold" />
              </div>
              <div class="text-xl text-neutral-500 dark:text-neutral-400">
                Based in Glasgow
              </div>
            </div>

            <!-- Description -->
            <p
              class="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl"
            >
              I'm a product-oriented web developer passionate about creating
              <span class="font-semibold text-primary-600 dark:text-primary-400">reliable</span>,
              <span
                class="font-semibold text-secondary-600 dark:text-secondary-400"
              >scalable</span>, and
              <span class="font-semibold text-accent-600 dark:text-accent-400">tested applications</span>
              that make a difference.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-modern"
                @click="onScrollToProjects"
              >
                <span>View My Work</span>
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 dark:text-primary-300 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-700 rounded-2xl hover:bg-primary-50 dark:hover:bg-neutral-700 transform hover:-translate-y-1 transition-all duration-300"
                @click="onScrollToContactForm"
              >
                <span>Let's Talk</span>
                <svg
                  class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-6 pt-8">
              <span
                class="text-sm font-medium text-neutral-500 dark:text-neutral-400"
              >Connect with me</span>
              <div class="flex gap-4">
                <NuxtLink
                  to="https://github.com/mikesglitch"
                  title="GitHub"
                  target="_blank"
                  rel="noopener"
                  class="p-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-yellow-400 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <IconGithub
                    class="w-5 h-5 text-neutral-700 dark:text-neutral-100 dark:group-hover:text-yellow-400 transition-colors"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.linkedin.com/in/mikesglitch"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener"
                  class="p-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-yellow-400 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <IconLinkedin
                    class="w-5 h-5 text-neutral-700 dark:text-neutral-100 dark:group-hover:text-yellow-400 transition-colors"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://discord.com/users/425717708663947265"
                  title="Discord"
                  target="_blank"
                  rel="noopener"
                  class="p-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-yellow-400 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <IconDiscord
                    class="w-5 h-5 text-neutral-700 dark:text-neutral-100 dark:group-hover:text-yellow-400 transition-colors"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.youtube.com/@MikesGlitch"
                  title="YouTube"
                  target="_blank"
                  rel="noopener"
                  class="p-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-yellow-400 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <IconYoutube
                    class="w-5 h-5 text-neutral-700 dark:text-neutral-100 dark:group-hover:text-yellow-400 transition-colors"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Image Column -->
          <div class="flex justify-center lg:justify-end animate-fade-in">
            <div class="relative">
              <!-- Decorative elements -->
              <div
                class="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-lg opacity-20 animate-glow"
              />
              <div class="relative modern-card p-8 max-w-md">
                <img
                  class="w-full h-auto rounded-2xl shadow-2xl"
                  src="/avatar_new.png"
                  alt="Mike Clark - Web Developer"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section
      class="py-24 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              currentColor 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        />
      </div>

      <div class="container mx-auto px-6 relative">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16 animate-slide-up">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 mb-6"
            >
              <span
                class="text-sm font-medium text-primary-700 dark:text-primary-300"
              >About Me</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Nice to meet you! I'm
              <span class="gradient-text">Michael Clark</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
            />
          </div>

          <!-- About Content -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <!-- Avatar -->
            <div class="lg:col-span-1 flex justify-center">
              <div class="relative group">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"
                />
                <div class="relative modern-card p-6">
                  <img
                    class="w-48 h-48 rounded-2xl object-cover shadow-lg"
                    src="/avatar_new.png"
                    alt="Michael Clark"
                  >
                  <div class="mt-4 text-center">
                    <h3
                      class="text-xl font-bold text-neutral-800 dark:text-neutral-200"
                    >
                      Michael Clark
                    </h3>
                    <p
                      class="text-primary-600 dark:text-primary-400 font-medium"
                    >
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="lg:col-span-2 space-y-6">
              <div
                class="space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                <p class="animate-slide-up" style="animation-delay: 0.1s">
                  Software development isn't just my job, it's my
                  <span
                    class="font-semibold text-primary-600 dark:text-primary-400"
                  >passion</span>. While some people complain about having to learn new
                  technologies every few years, I think that's the
                  <span
                    class="font-semibold text-secondary-600 dark:text-secondary-400"
                  >best part</span>
                  of our field.
                </p>

                <p class="animate-slide-up" style="animation-delay: 0.2s">
                  There's always something new to explore and amazing people to
                  learn from. The only challenge is finding enough time to dive
                  into everything that sparks my curiosity!
                  <span class="text-2xl">😁</span>
                </p>

                <p class="animate-slide-up" style="animation-delay: 0.3s">
                  Beyond coding, I'm passionate about
                  <span
                    class="font-semibold text-accent-600 dark:text-accent-400"
                  >travel</span>
                  and adventure. Exploring new places doesn't just satisfy my
                  wanderlust—it broadens my perspective and influences how I
                  approach problem-solving. My dream is to tour every country in
                  Europe on my motorbike.
                </p>
              </div>

              <!-- Skills/Tech Stack -->
              <div class="pt-8 animate-slide-up" style="animation-delay: 0.4s">
                <h4
                  class="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200"
                >
                  Current Tech Stack
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    class="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-xl border border-primary-200 dark:border-primary-700 text-sm font-medium"
                  >Vue.js</span>
                  <span
                    class="px-4 py-2 bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 text-secondary-700 dark:text-secondary-300 rounded-xl border border-secondary-200 dark:border-secondary-700 text-sm font-medium"
                  >React</span>
                  <span
                    class="px-4 py-2 bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 text-accent-700 dark:text-accent-300 rounded-xl border border-accent-200 dark:border-accent-700 text-sm font-medium"
                  >Node.js</span>
                  <span
                    class="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-xl border border-primary-200 dark:border-primary-700 text-sm font-medium"
                  >.NET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Work Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-slide-up">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 border border-secondary-200 dark:border-secondary-700 mb-6"
          >
            <span
              class="text-sm font-medium text-secondary-700 dark:text-secondary-300"
            >Client Work</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span class="gradient-text">Outstanding Companies</span>
          </h2>
          <p
            class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            I've had the privilege of collaborating with innovative companies to
            build scalable solutions that drive real business impact.
          </p>
          <div
            class="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto rounded-full mt-6"
          />
        </div>

        <!-- Client Cards -->
        <div
          v-if="data"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <div
            v-for="(client, idx) of data.clientsMarkdown"
            :key="idx"
            class="group modern-card p-8 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
            :style="`animation-delay: ${idx * 0.1}s`"
          >
            <NuxtLink
              class="block h-full"
              :to="client._path"
              :title="client.name"
              :external="false"
            >
              <div class="space-y-6">
                <!-- Company info -->
                <div class="flex items-start justify-between">
                  <div class="space-y-2">
                    <h3
                      class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    >
                      {{ client.description }}
                    </h3>
                    <p
                      class="text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      {{ client.title }}
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div
                      class="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>

                <!-- Company tag -->
                <div class="flex items-center justify-between">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 text-sm font-medium"
                  >
                    @{{ client.name }}
                  </span>

                  <!-- Arrow -->
                  <svg
                    class="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section
      ref="projectsEl"
      class="py-24 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <div
          class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div v-if="data" class="container mx-auto px-6 relative">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-slide-up">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-700 mb-6"
          >
            <span
              class="text-sm font-medium text-accent-700 dark:text-accent-300"
            >Recent Work</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Latest <span class="gradient-text">Projects</span>
          </h2>
          <p
            class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8"
          >
            Here are some of my recent projects that showcase my skills in
            modern web development.
          </p>
          <div
            class="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"
          />
        </div>

        <!-- Projects Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
        >
          <div
            v-for="(project, idx) of data.projectCards"
            :key="project.to"
            class="group modern-card p-8 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
            :style="`animation-delay: ${idx * 0.1}s`"
          >
            <div class="space-y-6">
              <!-- Project Header -->
              <div class="flex items-start justify-between">
                <div class="space-y-3 flex-1">
                  <div class="flex items-center gap-3">
                    <h3
                      class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    >
                      {{ project.title }}
                    </h3>
                    <a
                      :href="project.to"
                      target="_blank"
                      rel="noopener"
                      class="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all group/icon"
                    >
                      <svg
                        class="w-4 h-4 group-hover/icon:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <p
                    class="text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  >
                    {{ project.description }}
                  </p>
                </div>
              </div>

              <!-- Project Stats & Actions -->
              <div
                class="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700"
              >
                <div class="flex items-center gap-6">
                  <!-- Stars -->
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                    >{{ project.stars }}</span>
                  </div>

                  <!-- Last Updated -->
                  <div
                    v-if="project.lastCommittedAt"
                    class="text-sm text-neutral-500 dark:text-neutral-500"
                  >
                    Updated {{ toHumanReadableDate(project.lastCommittedAt) }}
                  </div>
                </div>

                <!-- Article Link -->
                <div v-if="project.article" class="flex-shrink-0">
                  <NuxtLink
                    :to="project.article"
                    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 rounded-lg border border-primary-200 dark:border-primary-700 transition-all group/link"
                  >
                    <span>Read Article</span>
                    <svg
                      class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Projects CTA -->
        <div class="text-center animate-slide-up" style="animation-delay: 0.5s">
          <div class="space-y-6">
            <p class="text-lg text-neutral-600 dark:text-neutral-300">
              Want to see more? Check out all my projects on GitHub.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/MikesGlitch"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900 dark:hover:bg-neutral-600 rounded-xl transition-all group"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
                <svg
                  class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section ref="contactFormEl" class="py-24 relative overflow-hidden">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-primary-950"
      />
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute bottom-20 right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl animate-float dark:bg-primary-800"
        />
        <div
          class="absolute top-20 left-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-2xl animate-float animation-delay-2000 dark:bg-secondary-800"
        />
      </div>

      <div class="container mx-auto px-6 relative">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16 animate-slide-up">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 mb-6"
            >
              <span
                class="text-sm font-medium text-primary-700 dark:text-primary-300"
              >Let's Connect</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Get In <span class="gradient-text">Touch</span>
            </h2>
            <p
              class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Ready to bring your ideas to life? I'm currently available for new
              projects and would love to hear about yours.
            </p>
            <div
              class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Contact Info -->
            <div
              class="space-y-8 animate-slide-up"
              style="animation-delay: 0.1s"
            >
              <div class="space-y-6">
                <h3
                  class="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
                >
                  Let's start a conversation
                </h3>
                <p
                  class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
                >
                  Whether you have a project in mind, want to collaborate, or
                  just fancy a chat about technology, I'd love to hear from you.
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mikesglitch"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-4 p-4 modern-card hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div
                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white"
                  >
                    <IconLinkedin class="w-6 h-6" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-yellow-400 transition-colors"
                    >
                      LinkedIn
                    </h4>
                    <p class="text-sm text-neutral-600 dark:text-neutral-300">
                      Professional networking
                    </p>
                  </div>
                  <svg
                    class="w-5 h-5 text-neutral-500 dark:text-neutral-300 group-hover:text-primary-500 dark:group-hover:text-yellow-400 group-hover:translate-x-1 transition-all ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="https://discord.com/users/425717708663947265"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-4 p-4 modern-card hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div
                    class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl text-white"
                  >
                    <IconDiscord class="w-6 h-6" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-secondary-600 dark:group-hover:text-yellow-400 transition-colors"
                    >
                      Discord
                    </h4>
                    <p class="text-sm text-neutral-600 dark:text-neutral-300">
                      Quick messages & chat
                    </p>
                  </div>
                  <svg
                    class="w-5 h-5 text-neutral-500 dark:text-neutral-300 group-hover:text-secondary-500 dark:group-hover:text-yellow-400 group-hover:translate-x-1 transition-all ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <!-- Fun Fact -->
              <div
                class="p-6 bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl border border-accent-200 dark:border-accent-700"
              >
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center text-white text-lg"
                  >
                    💡
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-accent-800 dark:text-accent-300 mb-1"
                    >
                      Response Time
                    </h4>
                    <p class="text-sm text-accent-700 dark:text-accent-400">
                      I typically respond within 24 hours during weekdays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="animate-slide-up" style="animation-delay: 0.2s">
              <div class="modern-card p-8">
                <form class="space-y-6" @submit.prevent="sendContactForm">
                  <div class="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                        for="email"
                      >
                        Your Email Address
                      </label>
                      <input
                        id="email"
                        v-model="contactForm.email"
                        :disabled="contactFormDisabled"
                        name="email"
                        type="email"
                        required
                        class="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20 transition-all duration-200"
                        placeholder="your.email@example.com"
                      >
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      v-model="contactForm.message"
                      :disabled="contactFormDisabled"
                      name="message"
                      rows="6"
                      required
                      class="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>
                  <button
                    type="submit"
                    :disabled="contactFormDisabled"
                    class="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-neutral-400 disabled:to-neutral-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:hover:transform-none disabled:hover:shadow-lg transition-all duration-300 btn-modern"
                  >
                    <span v-if="!contactForm.sending">{{
                      sendButtonLabel
                    }}</span>
                    <div v-else class="flex items-center justify-center gap-3">
                      <div
                        class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      />
                      <span>Sending...</span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'
import type { IGetProjectsResponse } from '~/interfaces/Api'
import type { IProjectCardProps } from '~/components/card/Project.vue'
import { toHumanReadableDate } from '~/utils/dateUtils'

const config = useRuntimeConfig()

const contactFormEl = ref<HTMLElement>()
const projectsEl = ref<HTMLElement>()

const { data } = await useAsyncData('homePageInit', async () => {
  const projectsResponsePromise = $fetch<IGetProjectsResponse>(
    `${config.public.apiBaseUrl}/projects`
  )
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const clientsMarkdownPromise = queryContent('/clients')
    .only(['order', 'title', 'description', 'name', '_path'])
    .sort({ order: -1 })
    .limit(4)
    .find()

  const [githubProjectsResult, projectArticlesResult, clientsMarkdownResult] =
    await Promise.allSettled([
      projectsResponsePromise,
      projectsMarkdownPromise,
      clientsMarkdownPromise
    ])

  let projectCards: IProjectCardProps[] = []
  let clientsMarkdown: Pick<ParsedContent, string>[] = []
  if (
    githubProjectsResult.status === 'fulfilled' &&
    projectArticlesResult.status === 'fulfilled' &&
    clientsMarkdownResult.status === 'fulfilled'
  ) {
    clientsMarkdown = clientsMarkdownResult.value
    const top4Projects = githubProjectsResult.value.projects
      .sort(
        (a, b) => Date.parse(b.lastComittedAt) - Date.parse(a.lastComittedAt)
      )
      .slice(0, 4)
    projectCards = top4Projects.map((project): IProjectCardProps => {
      const articleData = projectArticlesResult.value.find(
        article => article.repoName === project.name
      )
      return {
        to: project.url,
        title: project.name,
        description: project.description,
        stars: project.stars,
        article: articleData ? articleData._path : undefined,
        lastCommittedAt: project.lastComittedAt
      }
    })
  }

  return { projectCards, clientsMarkdown }
})

const contactForm = ref({
  name: '',
  email: '',
  message: '',
  sending: false,
  state: '' as 'sent' | 'failed' | ''
})

const sendButtonLabel = computed(() => {
  if (contactForm.value.sending) {
    return 'Sending...'
  }
  if (contactForm.value.state === 'failed') {
    return 'Failed to send 😢'
  }
  if (contactForm.value.state === 'sent') {
    return 'Sent! ✔'
  }
  return 'Send 💌'
})

function onScrollToContactForm () {
  contactFormEl.value?.scrollIntoView({ behavior: 'smooth' })
}

function onScrollToProjects () {
  projectsEl.value?.scrollIntoView({ behavior: 'smooth' })
}

const contactFormDisabled = computed(
  () => contactForm.value.sending || contactForm.value.state === 'sent'
)

async function sendContactForm () {
  // class="w-full" action="https://api.web3forms.com/submit" method="POST"
  contactForm.value.sending = true
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: config.public.web3formsAccessKey,
      subject: 'New Contact Form from MikesGlitch.com',
      from_name: 'MikesGlitch.com',
      name: contactForm.value.name,
      email: contactForm.value.email,
      message: contactForm.value.message
    })
  })
  const result = await response.json()
  if (result.success) {
    contactForm.value.state = 'sent'
  } else {
    contactForm.value.state = 'failed'
  }

  contactForm.value.sending = false
}
</script>

<style lang="scss" scoped>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid black;
  padding-right: 3px;
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 3.5s steps(30, end), blink-caret 1s step-end infinite;
}

.dark {
  .typewriter {
    border-right: 0.15em solid white;
    animation: typing 3.5s steps(30, end), dark-blink-caret 1s step-end infinite;
  }
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

@keyframes dark-blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
