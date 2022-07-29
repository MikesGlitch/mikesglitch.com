import axios from "axios";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const tags = [
    "programming",
    "programmer",
    "computer",
    "css",
    "javascript",
    "coding",
    "hacking",
    "coder",
  ];
  const requestUrl = `https://api.giphy.com/v1/gifs/random?api_key=${
    config.serverGiphyApiKey
  }&tag=${tags.join(" ")}`;
  const response = await axios(requestUrl).then((res) => res.data);

  return {
    gif: response.data.images.downsized_large.url,
  };
});
