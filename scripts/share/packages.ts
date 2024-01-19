/**
 * packages utils.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 * @Description get component's names array from '/packages/*'
 */

import fs from 'fs';
import path from 'path';
import { root, isDirectory, isExist } from '.';

// get directory name list under 'directoryPath'
export function getPackageNames(directoryPath: string, matchedRegExp: RegExp) {
  if (!isExist(directoryPath)) return [];
  if (!isDirectory(directoryPath)) return [];

  const fileNameList = fs.readdirSync(directoryPath);
  return fileNameList.filter((fileName: string) => {
    let matched = true;
    if (matchedRegExp) {
      matched = matchedRegExp.test(fileName);
    }
    return matched && isDirectory(path.resolve(directoryPath, fileName));
  });
}

// get directory name-absPath mapping under 'directoryPath'
export function getPackageNamePathMap(directoryPath: string) {
  const matchedRegExp = /^((?!style).)+$/;
  return getPackageNames(directoryPath, matchedRegExp).reduce((namePathMap: any, name: string) => {
    namePathMap[name] = root(directoryPath, name);
    return namePathMap;
  }, {});
}
