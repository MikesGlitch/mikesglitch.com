import { Response } from 'express'
import { IGetYoutubeVideosResponse, IYouTubeVideo } from 'interfaces/Api'
const axios = require('axios')

const getYoutubeEmbedUrl = (videoId: string) => `https://youtube.com/embed/${videoId}?max-results=1&controls=1&showinfo=1&rel=0`

export const getYoutubeVideos = async (_: Request, res: Response) => {
  const myChannelId = 'UCfx1yOrSVwlO-VwpKxvlqow'
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${myChannelId}&key=${process.env.SERVER_GOOGLE_API_KEY}`
  const response = await axios(requestUrl).then((res: { data: any }) => res.data)

  const latestVideos: IYouTubeVideo[] = response.items.map((video: any) => {
    return {
      id: video.id.videoId,
      publishedAt: video.snippet.publishedAt,
      thumbnail: video.snippet.thumbnails.medium.url,
      title: video.snippet.title,
      description: video.snippet.description,
      iframeEmbedUrl: getYoutubeEmbedUrl(video.id.videoId)
    }
  })

  const video: IGetYoutubeVideosResponse = {
    latestVideoEmbedIframeUrl: latestVideos[0].iframeEmbedUrl,
    latestVideos
  }

  res.end(JSON.stringify(video))
}
