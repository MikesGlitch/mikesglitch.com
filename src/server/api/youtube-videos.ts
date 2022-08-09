/* eslint-disable no-console */
import { Client } from 'memjs'
import { createError } from 'h3'
import { IGetYoutubeVideosResponse, IYouTubeVideo } from 'interfaces/Api'

const CACHE_KEY = 'latestYoutubeVideos'
const getYoutubeEmbedUrl = (videoId: string) => `https://youtube.com/embed/${videoId}?max-results=1&controls=1&showinfo=1&rel=0`
const escapeHtmlCharacters = (html: string) => {
  // Didn't want to add a library just for this
  return html.replace(/&quot;/g, '"')
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const cacheClient = Client.create(config.memcachierServers, { password: config.memcachePassword, username: config.memcacheUsername })
  const cachedVideos = await cacheClient.get(CACHE_KEY).catch(() => null)

  if (cachedVideos?.value) {
    console.log('cache hit - returning youtube video cache')
    return JSON.parse(cachedVideos.value.toString())
  }

  console.log('no cache found')
  const myChannelId = 'UCfx1yOrSVwlO-VwpKxvlqow'

  // This doesn't page yet - it just takes 50.  I might want to add paging when I have more videos
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${myChannelId}&type=video&maxResults=50&key=${config.serverGoogleApiKey}`

  try {
    const response = await $fetch<any>(requestUrl)
    if (response) {
      const latestVideos: IYouTubeVideo[] = response.items.map((video: any) => {
        return {
          id: video.id.videoId,
          publishedAt: video.snippet.publishedAt,
          thumbnail: video.snippet.thumbnails.medium.url,
          title: escapeHtmlCharacters(video.snippet.title),
          description: escapeHtmlCharacters(video.snippet.description),
          iframeEmbedUrl: getYoutubeEmbedUrl(video.id.videoId)
        }
      })

      const video: IGetYoutubeVideosResponse = {
        latestVideoEmbedIframeUrl: latestVideos[0].iframeEmbedUrl,
        latestVideos
      }

      const responseContent = JSON.stringify(video)
      await cacheClient.set(CACHE_KEY, responseContent, { expires: 3600 }).catch(err => console.error(err)) // 1 hour
      console.log('cached the youtube response')

      return JSON.parse(responseContent)
    } else {
      console.error('Unable to call the youtube api')
      return createError({ statusCode: 503, data: 'Unable to call the youtube api' })
    }
  } catch (error) {
    console.error('Error getting response from youtube api', error)
    return null
  }
})
