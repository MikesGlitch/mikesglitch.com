import { getGif } from './routes/getGif'

const express = require('express')
require('dotenv').config()

// Create express instance
const app = express()

// Import API Routes
app.get('/gif', getGif)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
