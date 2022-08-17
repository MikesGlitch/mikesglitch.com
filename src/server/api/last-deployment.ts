import { Client } from 'memjs'
import { IGetLastDeploymentResponse } from '~/interfaces/Api'

const CACHE_KEY = 'deployments'

export default defineEventHandler(async () => {
  // take request params for which projects to get?
  const config = useRuntimeConfig()
  const getDeploymentsUrl = 'https://api.github.com/repos/mikesglitch/mikesglitch.com/deployments?environment=production&per_page=1'
  const basicAuthToken = Buffer.from(`mikesglitch:${config.githubPat}`).toString('base64')

  try {
    const cacheClient = Client.create(config.memcachierServers, { password: config.memcachePassword, username: config.memcacheUsername })
    const cachedDeployments = await cacheClient.get(CACHE_KEY).catch(() => null)

    if (cachedDeployments?.value) {
      console.log('cache hit - returning github deployments cache')
      console.log(cachedDeployments.value.toString())
      return JSON.parse(cachedDeployments.value.toString())
    }

    console.log('no cache found')

    const githubDeploymentsResponse = await $fetch<any[]>(getDeploymentsUrl, {
      headers: {
        authorization: `basic ${basicAuthToken}`
      }
    })

    const lastDeployment = githubDeploymentsResponse[0]

    const response: IGetLastDeploymentResponse = {
      lastDeployedAt: lastDeployment.created_at,
      commitSha: lastDeployment.sha
    }

    const responseContent = JSON.stringify(response)
    await cacheClient.set(CACHE_KEY, responseContent, { expires: 1800 }).catch(err => console.error(err)) // 30 mins
    console.log('cached the deployments response')

    return response
  } catch (error) {
    console.error(error)
    return createError({ statusCode: 500, data: 'Unable to call the github api for deployments' })
  }
})
