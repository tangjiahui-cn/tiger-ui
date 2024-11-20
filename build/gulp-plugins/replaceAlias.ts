import replace from 'gulp-replace';
import pkg from '../../package.json';
import path from 'path';

const NAME = pkg.name;
export function replaceAlias(stream: any) {
  return (
    stream
      .pipe(replace(/PACKAGE_NAME/g, `"${NAME}"`))
      .pipe(replace(/(import\s+['"][.\/\w-]*).less(['"])/g, '$1.css$2'))
      // replace import alias: @/. @/xxx => ../.../xxx;
      .pipe(
        replace(/(import[\s{},\w]*['"])(@\/)([\w\/.-]+['"])/g, function (...args) {
          const [_, m1, __, m3] = args;
          const currentRelativeDir: string = this.file.dirname.slice(this.file.base.length + 1);
          const relativeToPkgRootDir = path.relative(currentRelativeDir, '');
          return `${m1}${relativeToPkgRootDir}/${m3}`;
        }),
      )
  );
}
