const path = require('path');

module.exports.root = root;
module.exports.mergeWebpack = require('webpack-merge').merge;
module.exports.NAME = require(root('package.json')).name;

/**
 * get path relative to directory root.
 */
function root(...args) {
  return path.resolve(__dirname, '../', ...args);
}
