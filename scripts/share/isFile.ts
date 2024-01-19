/**
 * file utils.
 *
 * @Author TangJiaHui
 * @Date 2024/1/19
 */
import fs from 'fs';

export function isExist(absPath: string) {
  return fs.existsSync(absPath);
}

export function isDirectory(absPath: string) {
  return fs.statSync(absPath).isDirectory();
}

export function isFile(absPath: string) {
  return fs.statSync(absPath).isFile();
}
