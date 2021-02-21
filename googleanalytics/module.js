const { resolve } = require('path')

function analyticsModule (moduleOptions) {
  const options = {
    dev: true,
    ...this.options['google-analytics'],
    ...this.options.googleAnalytics,
    ...moduleOptions
  }

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'google-analytics.js',
    options
  })
}

module.exports = analyticsModule
module.exports.meta = require('../package.json')
