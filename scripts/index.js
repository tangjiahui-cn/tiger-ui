const path = require('path');
const { merge } = require('webpack-merge')


module.exports.root = root
module.exports.mergeWebpack = merge

/**
 * get path relative to directory root.
 */
function root (...args) {
  return path.resolve(__dirname, '../', ...args)
}
