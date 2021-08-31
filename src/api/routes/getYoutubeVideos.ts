/* eslint-disable no-console */
import { Response } from 'express'
import { IGetYoutubeVideosResponse, IYouTubeVideo } from 'interfaces/Api'
import axios from 'axios'
import { Client } from 'memjs'

const CACHE_KEY = 'latestYoutubeVideos'
const getYoutubeEmbedUrl = (videoId: string) => `https://youtube.com/embed/${videoId}?max-results=1&controls=1&showinfo=1&rel=0`
const escapeHtmlCharacters = (html: string) => {
  // Didn't want to add a library just for this
  return html.replace(/&quot;/g, '"')
}

export const getYoutubeVideos = async (_: Request, res: Response) => {
  const cacheClient = Client.create()
  const cachedVideos = await cacheClient.get(CACHE_KEY).catch(() => null)

  if (cachedVideos?.value) {
    console.log('cache hit - returning youtube video cache')
    res.end(cachedVideos.value.toString())
    return
  }

  console.log('no cache found')
  const myChannelId = 'UCfx1yOrSVwlO-VwpKxvlqow'

  // This doesn't page yet - it just takes 50.  I might want to add paging when I have more videos
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${myChannelId}&type=video&maxResults=50&key=${process.env.SERVER_GOOGLE_API_KEY}`
  const response = await axios(requestUrl).then((res: { data: any }) => res.data).catch((err) => {
    console.error('Error getting response from youtube api', err)
    return null
  })

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
    await cacheClient.set(CACHE_KEY, responseContent, { expires: 300 }).catch(err => console.error(err)) // 5 minutes
    console.log('cached the youtube response')

    res.end(responseContent)
  } else {
    res.statusCode = 503
    res.send('Unable to call the youtube api')
  }
}
