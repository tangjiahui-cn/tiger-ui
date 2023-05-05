/**
 * get component's names array from '/packages/*'
 */

const fs = require('fs');
const path = require('path');
const { isDirectory, isExist } = require('./isFile');
const { root } = require('../index');

/**
 * get directory name list under 'directoryPath'
 */
function getPackageNames(directoryPath, matchedRegExp) {
  if (!isExist(directoryPath)) return [];
  if (!isDirectory(directoryPath)) return [];

  const fileNameList = fs.readdirSync(directoryPath);
  return fileNameList.filter((fileName) => {
    let matched = true;
    if (matchedRegExp) {
      matched = matchedRegExp.test(fileName);
    }
    return matched && isDirectory(path.resolve(directoryPath, fileName));
  });
}

/**
 *
 * get directory name-absPath mapping under 'directoryPath'
 */
function getPackageNamePathMap(directoryPath) {
  const matchedRegExp = /^((?!style).)+$/;
  return getPackageNames(directoryPath, matchedRegExp).reduce((namePathMap, name) => {
    namePathMap[name] = root(directoryPath, name);
    return namePathMap;
  }, {});
}

module.exports.getPackageNames = getPackageNames;
module.exports.getPackageNamePathMap = getPackageNamePathMap;
