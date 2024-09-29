import replace from 'gulp-replace';
import pkg from '../../package.json';

const NAME = pkg.name;
export function replaceAlias(stream: any) {
  return (
    stream
      .pipe(replace(/PACKAGE_NAME/, `"${NAME}"`))
      .pipe(replace(/(import\s+['"][.\/\w-]*).less(['"])/g, '$1.css$2'))
      // replace import alias: @/. @/xxx => ../.../xxx;
      .pipe(
        replace(/(import[\s{},\w]*['"])(@\/)([\w\/.-]+['"])/g, function (...args) {
          const [_, m1, __, m3] = args;
          const pkgDir: string = this.file.dirname.slice(this.file.base.length + 1);
          return `${m1}${pkgDirToRelativePath(pkgDir)}${m3}`;
        }),
      )
    // require @/. require @/xxx => ../.../xxx;
    // .pipe(
    //   replace(/(require\(['"])(@\/)([\w\/.-]+['"]\))/g, function (...args) {
    //     const [_, m1, __, m3] = args;
    //     const pkgDir: string = this.file.dirname.slice(this.file.base.length + 1);
    //     return `${m1}${pkgDirToRelativePath(pkgDir)}${m3}`;
    //   }),
    // )
  );
}

/**
 * translate pkg dir path to relative path
 *
 * @param pkgPath
 * @return relativePath
 * @example
 * - button/buttonGroup/index.js
 * - figProvider/ConfigProvider/index.js
 * - "button/buttonGroup" => "../../"
 */
function pkgDirToRelativePath(pkgPath: string = ''): string {
  const result = pkgPath
    .split('/')
    .reduce((result, cur) => {
      if (cur) {
        result.push('..');
      }
      return result;
    }, [] as string[])
    .join('/');
  return `${result}${result ? '/' : '.'}`;
}
