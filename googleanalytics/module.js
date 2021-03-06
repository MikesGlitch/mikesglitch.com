const { resolve } = require('path')

function analyticsModule () {
  this.addPlugin({
    mode: 'client',
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'google-analytics.js'
  })
}

module.exports = analyticsModule
