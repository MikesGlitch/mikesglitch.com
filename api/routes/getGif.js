const axios = require('axios')
const asyncHandler = require('express-async-handler')

export const getGif = asyncHandler(async (req, res) => {
  const tags = ['programming', 'programmer', 'computer', 'css', 'javascript', 'coding', 'hacking', 'coder']
  const requestUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.SERVER_GIPHY_API_KEY}&tag=${tags.join(' ')}`
  const response = await axios(requestUrl).then(res => res.data)

  const gif = {
    gif: response.data.images.downsized_large.url
  }

  res.end(JSON.stringify(gif))
})
