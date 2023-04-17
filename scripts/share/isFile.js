const fs = require('fs');

module.exports.isExist = isExist;
module.exports.isDirectory = isDirectory;
module.exports.isFile = isFile;

function isExist(absPath) {
  return fs.existsSync(absPath);
}

function isDirectory(absPath) {
  return fs.statSync(absPath).isDirectory();
}

function isFile(absPath) {
  return fs.statSync(absPath).isFile();
}
