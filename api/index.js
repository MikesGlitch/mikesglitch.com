const express = require('express')
const config = require('dotenv').config()

console.log(config)
// Create express instance
const app = express()

// Require API routes
const getGif = require('./routes/getGif')

// Import API Routes
app.use(getGif)

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
