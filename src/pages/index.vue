<template>
  <div>
    <div class="bg-gray-light dark:bg-gray-medium-default">
      <div class="container grid grid-cols-1 sm:grid-cols-2 py-16 sm:py-24">
        <div class="flex flex-col justify-center gap-6">
          <div class="flex flex-col gap-4">
            <TextHeading :size-class="'text-5xl'">
              Hi, I'm <span class="text-hotpink">Mike</span> 👋
            </TextHeading>
            <TextHeading :size-class="'text-2xl'">
              I'm a
              <TextTypewriter />
            </TextHeading>
            <TextHeading :size-class="'text-2xl'">
              Based in Glasgow
            </TextHeading>
          </div>
          <p class="text-lg leading-9">
            I'm a product-oriented web developer from Glasgow, Scotland.<br>
            I love to solve problems and focus on delivering reliable, scalable and tested applications.<br>
          </p>

          <div class="flex gap-4 items-center">
            <Button title="Got a project?" label="Got a project?" @click="onScrollToProjects" />
            <ButtonPrimary class="px-10" title="Let's talk" label="Let's talk" @click="onScrollToContactForm()" />
          </div>
        </div>
        <img class="hidden sm:block ml-3 max-w-full h-auto my-auto" src="/avatar_new.png" alt="Avatar">
      </div>
    </div>

    <div class="container flex py-16 sm:py-24">
      <div class="flex flex-col sm:flex-row gap-10">
        <div class="hidden sm:block min-w-[300px] my-auto">
          <TextHeading size-class="text-lg">
            It's nice to meet you!
          </TextHeading>
          <TextHeading class="mt-2">
            <span class="text-hotpink">Michael Clark</span>
          </TextHeading>
          <TextHeading :size-class="'text-lg'" class="mt-2 hidden sm:block">
            Web Developer
          </TextHeading>

          <div class="mt-2 flex gap-4 flex-row items-center">
            <NuxtLink to="https://github.com/mikesglitch" title="Check out my GitHub" target="_blank" rel="noopener">
              <IconGithub class="w-8 hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/mikesglitch" title="Check out my LinkedIn" target="_blank" rel="noopener">
              <IconLinkedin class="w-8 fill-[#0a66c2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://discord.com/users/425717708663947265" title="Message me on Discord" target="_blank" rel="noopener">
              <IconDiscord class="w-[2rem] fill-[#5865f2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/@MikesGlitch" title="Check out my YouTube" target="_blank" rel="noopener">
              <IconYoutube class="w-12 hover:opacity-70" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-4 text-lg">
          <p>
            Software development isn't just my job, it's my hobby. Some people complain about having to learn new things
            every few years, but I think that's the best part of our field. There's always something new to explore and
            amazing people to learn from. The only problem is finding the time to do it all.
          </p>
          <p>Maybe I should quit my job and become a full-time hobbyist. 😁</p>
          <p>
            Outside of software development, I appreciate travel. Traveling is not only a fun thing to do but also
            broadens my horizons. I'd like to tour every country in Europe one day on my motorbike. 🌍
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-24">
      <div class="bg-gray-light dark:bg-gray-medium-default">
        <div class="container flex py-16 sm:py-24">
          <div class="flex flex-col gap-5 w-full">
            <div>
              <TextHeading>Recent <span class="text-hotpink">Client Work</span></TextHeading>
            </div>
            <p class="text-center italic mt-8 mb-5">
              I have had the privilege of working with these outstanding companies in recent years.
            </p>
            <div v-if="data" class="grid sm:grid-cols-2 gap-5">
              <div v-for="(client, idx) of data.clientsMarkdown" :key="idx" class="w-full dark:bg-gray-dark bg-white rounded-md group">
                <NuxtLink
                  class="block h-full w-full shadow-sm hover:shadow-xl transition-shadow duration-200 ease-in border border-gray-light dark:border-gray-dark dark:group-hover:border-hotpink"
                  :to="client._path"
                  :title="client.name"
                  :external="false"
                >
                  <div class="flex flex-col gap-4 px-6 py-4 md:px-16 md:py-11 content-between h-full">
                    <h3 class="text-xl font-bold flex-1">
                      {{ client.description }}
                    </h3>
                    <div class="flex flex-col md:flex-row items-center justify-between">
                      <span class="inline-flex gap-2 items-center">
                        <p>
                          {{ client.title }}
                        </p>
                      </span>
                      <span class="italic text-xl text-hotpink">@{{ client.name }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="projectsEl" class="py-16 sm:py-24">
      <div v-if="data" class="container flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <TextHeading>Latest <span class="text-hotpink">Projects</span></TextHeading>
          <LinkButtonInternal to="/projects" class="hidden sm:block" text="View All Projects" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 auto-rows-fr">
          <div v-for="project of data.projectCards" :key="project.to">
            <CardProject
              :to="project.to"
              :title="project.title"
              :description="project.description"
              :stars="project.stars"
              :article="project.article"
            />
          </div>
        </div>
        <p class="text-center italic mt-8">
          Have a look at my latest projects on <LinkExternal class="text-hotpink" href="https://github.com/MikesGlitch" title="My Github" text="Github" />.
        </p>
      </div>
    </div>

    <div ref="contactFormEl" class="flex flex-col gap-24">
      <div class="bg-gray-light dark:bg-gray-medium-default">
        <div class="container flex flex-col gap-5 py-16 sm:py-24">
          <div class="flex justify-between items-center">
            <TextHeading>Get In <span class="text-hotpink">Contact</span></TextHeading>
          </div>
          <div class="grid gap-5">
            <div class="flex flex-col gap-4 text-lg">
              <p>
                I am currently taking new clients. If you are looking for someone to help you with your next project, or you
                want to chat, feel free to send me a message.
              </p>
              <p>
                You can ping me on
                <LinkExternal
                  title="Message me on LinkedIn"
                  href="https://www.linkedin.com/in/mikesglitch"
                  text="LinkedIn"
                />
                or
                <LinkExternal
                  title="Message me on Discord"
                  href="https://discord.com/users/425717708663947265"
                  text="Discord"
                /> or fill in the form below and I'll get back to you.
              </p>
            </div>
            <form class="w-full lg:w-2/3 mx-auto" @submit.prevent="sendContactForm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="w-full">
                  <label class="block font-bold mb-2" for="fullName">
                    Name
                  </label>
                  <input
                    id="fullName"
                    v-model="contactForm.name"
                    :disabled="contactFormDisabled"
                    name="fullName"
                    class="appearance-none block w-full border focus:border-hotpink rounded py-3 px-4 leading-tight focus:outline-none"
                    type="text"
                    :required="true"
                  >
                </div>
                <div class="w-full">
                  <label class="block font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="contactForm.email"
                    :disabled="contactFormDisabled"
                    name="email"
                    class="appearance-none block w-full border focus:border-hotpink rounded py-3 px-4 leading-tight focus:outline-none"
                    :required="true"
                    type="email"
                  >
                </div>
                <div class="w-full sm:col-span-2">
                  <label class="block font-bold mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="contactForm.message"
                    rows="10"
                    :disabled="contactFormDisabled"
                    name="message"
                    class="appearance-none block w-full text-gray-700 border focus:border-hotpink rounded py-3 px-4 leading-tight focus:outline-none"
                  />
                </div>
                <div class="sm:col-span-2 w-full text-center">
                  <ButtonPrimary
                    class="text-2xl px-8"
                    type="submit"
                    title="Send"
                    :disabled="contactFormDisabled"
                    :label="sendButtonLabel"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'
import type { IGetProjectsResponse } from '~/interfaces/Api'
import type { IProjectCardProps } from '~/components/card/Project.vue'
const config = useRuntimeConfig()

const contactFormEl = ref<HTMLElement>()
const projectsEl = ref<HTMLElement>()

const { data } = await useAsyncData('homePageInit', async () => {
  const projectsResponsePromise = $fetch<IGetProjectsResponse>(`${config.public.apiBaseUrl}/projects`)
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const clientsMarkdownPromise = queryContent('/clients')
    .only(['order', 'title', 'description', 'name', '_path'])
    .sort({ order: -1 })
    .limit(4)
    .find()

  const [githubProjectsResult, projectArticlesResult, clientsMarkdownResult] = await Promise.allSettled([projectsResponsePromise, projectsMarkdownPromise, clientsMarkdownPromise])

  let projectCards: IProjectCardProps[] = []
  let clientsMarkdown: Pick<ParsedContent, string>[] = []
  if (githubProjectsResult.status === 'fulfilled' && projectArticlesResult.status === 'fulfilled' && clientsMarkdownResult.status === 'fulfilled') {
    clientsMarkdown = clientsMarkdownResult.value
    const top4Projects = githubProjectsResult.value.projects.sort((a, b) => Date.parse(b.lastComittedAt) - Date.parse(a.lastComittedAt)).slice(0, 4)
    projectCards = top4Projects.map((project): IProjectCardProps => {
      const articleData = projectArticlesResult.value.find(article => article.repoName === project.name)
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
  if (contactForm.value.sending) { return 'Sending...' }
  if (contactForm.value.state === 'failed') { return 'Failed to send 😢' }
  if (contactForm.value.state === 'sent') { return 'Sent! ✔' }
  return 'Send 💌'
})

function onScrollToContactForm () {
  contactFormEl.value?.scrollIntoView({ behavior: 'smooth' })
}

function onScrollToProjects () {
  projectsEl.value?.scrollIntoView({ behavior: 'smooth' })
}

const contactFormDisabled = computed(() => contactForm.value.sending || contactForm.value.state === 'sent')

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
  border-right: .15em solid black;
  padding-right: 3px;
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation:
    typing 3.5s steps(30, end),
    blink-caret 1s step-end infinite;
}

.dark {
  .typewriter {
    border-right: .15em solid white;
    animation:
      typing 3.5s steps(30, end),
      dark-blink-caret 1s step-end infinite;
  }
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black}
}

@keyframes dark-blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white}
}
</style>
