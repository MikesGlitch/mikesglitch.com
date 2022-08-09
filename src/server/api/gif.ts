export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const tags = [
    'programming',
    'programmer',
    'computer',
    'css',
    'javascript',
    'coding',
    'hacking',
    'coder'
  ]
  const requestUrl = `https://api.giphy.com/v1/gifs/random?api_key=${
    config.serverGiphyApiKey
  }&tag=${tags.join(' ')}`

  const response = await $fetch(requestUrl).then((res: { data: any }) => res.data)

  return {
    gif: response.images.downsized_large.url
  }
})
