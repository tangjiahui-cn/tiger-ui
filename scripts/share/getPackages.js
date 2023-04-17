/**
 * get component's names array from '/packages/*'
 */

const fs = require('fs')
const path = require('path');
const { isDirectory, isExist } = require("./isFile");
const {root} = require("../index");

/**
 * get directory name list under 'directoryPath'
 */
function getPackageNames (directoryPath) {
  if (!isExist(directoryPath)) return []
  if (!isDirectory(directoryPath)) return []

  const fileNameList = fs.readdirSync(directoryPath)
  return fileNameList.filter(fileName => {
    return isDirectory(path.resolve(directoryPath, fileName))
  })
}

/**
 *
 * get directory name-absPath mapping under 'directoryPath'
 */
function getPackageNamePathMap (directoryPath) {
  return getPackageNames(directoryPath).reduce((namePathMap, name) => {
    namePathMap[name] = root(directoryPath, name)
    return namePathMap
  }, {})
}

module.exports.getPackageNames = getPackageNames
module.exports.getPackageNamePathMap = getPackageNamePathMap
