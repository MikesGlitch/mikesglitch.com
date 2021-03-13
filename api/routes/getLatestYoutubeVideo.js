const axios = require('axios')

export const getLatestYoutubeVideo = async (req, res) => {
  const myChannelId = 'UCfx1yOrSVwlO-VwpKxvlqow'
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${myChannelId}&key=${process.env.SERVER_GOOGLE_API_KEY}`
  const response = await axios(requestUrl).then(res => res.data)
  const videoId = response.items[0].id.videoId
  const video = {
    video: videoId,
    videoEmbedIframeUrl: `https://youtube.com/embed/${videoId}?max-results=1&controls=1&showinfo=1&rel=0`
  }

  res.end(JSON.stringify(video))
}
