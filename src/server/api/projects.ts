import { Client } from 'memjs'
import { IGetProjectsResponse, IProject } from '~/interfaces/Api'

const CACHE_KEY = 'projects'

export default defineEventHandler(async () => {
  // take request params for which projects to get?
  const config = useRuntimeConfig()
  const getReposUrl = 'https://api.github.com/users/MikesGlitch/repos'
  const basicAuthToken = Buffer.from(`mikesglitch:${config.githubPat}`).toString('base64')

  try {
    const cacheClient = Client.create(config.memcachierServers, { password: config.memcachePassword, username: config.memcacheUsername })
    const cachedProjects = await cacheClient.get(CACHE_KEY).catch(() => null)

    if (cachedProjects?.value) {
      console.log('cache hit - returning github project cache')
      return JSON.parse(cachedProjects.value.toString())
    }

    console.log('no cache found')

    const githubProjectsResponse = await $fetch<any[]>(getReposUrl, {
      headers: {
        authorization: `basic ${basicAuthToken}`
      }
    })

    const excludeRepos = ['MikesGlitch/MikesGlitch']

    const filteredProjects = githubProjectsResponse.filter(projectItem => !projectItem.fork && !projectItem.archived && !excludeRepos.includes(projectItem.full_name))

    const response: IGetProjectsResponse = {
      projects: filteredProjects.map((project): IProject => {
        return {
          id: project.id,
          name: project.name,
          description: project.description,
          stars: project.stargazers_count,
          url: project.html_url
        }
      })
    }

    const responseContent = JSON.stringify(response)
    await cacheClient.set(CACHE_KEY, responseContent, { expires: 3600 }).catch(err => console.error(err)) // 1 hour
    console.log('cached the project response')

    return response
  } catch (error) {
    console.error(error)
    return createError({ statusCode: 503, data: 'Unable to call the github api' })
  }
})
