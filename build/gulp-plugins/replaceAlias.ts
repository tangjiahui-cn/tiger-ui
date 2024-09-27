import replace from 'gulp-replace';
import pkg from '../../package.json';

const NAME = pkg.name;
export function replaceAlias(stream: any) {
  return (
    stream
      .pipe(replace(/(import\s+['"][.\/\w-]*).less(['"])/, '$1.css$2'))
      // replace alias: @/.
      .pipe(replace(/(import[\s\w{}]+\s+from\s+['"])(@\/\.)(['"])/, `$1${NAME}$3`))
      // replace alias: @/xxx
      .pipe(replace(/(import[\s\w{}]+\s+from\s+['"])(@\/)([\w-]+['"])/, `$1${NAME}/$3`))
  );
}
