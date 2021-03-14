import { getGif } from './routes/getGif'
import { getLatestYoutubeVideo } from './routes/getLatestYoutubeVideo'
const { ExpressPeerServer } = require('peer')

const express = require('express')
require('dotenv').config()

// Create express instance
const app = express()

// Import API Routes
app.get('/gif', getGif)
app.get('/latest-youtube-video', getLatestYoutubeVideo)

// WebRTC - PeerServer - maybe move this to an else on the standalone check
const server = app.listen() // unsure
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  allow_discovery: true
})

peerServer.on('connection', (client) => {
  console.log('connection', client)
})

peerServer.on('disconnect', (client) => {
  console.log('disconnection', client)
})

app.use('/peerjs', peerServer)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  console.log('launching standalone')
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
