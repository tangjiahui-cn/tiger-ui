import replace from 'gulp-replace';
import pkg from '../../package.json';

const NAME = pkg.name;
export function replaceAlias(stream: any, isESM?: boolean) {
  const dir = isESM ? 'es' : 'lib';
  return (
    stream
      .pipe(replace(/(import\s+['"][.\/\w-]*).less(['"])/g, '$1.css$2'))
      // replace alias: @/.
      .pipe(replace(/(import[\s{},\w]*['"])(@\/\.)([\w-\/]+['"])/g, `$1${NAME}/${dir}$3`))
      // replace alias: @/xxx
      .pipe(replace(/(import[\s{},\w]*['"])(@\/)([\w-\/]+['"])/g, `$1${NAME}/${dir}/$3`))
    // // require @/.
    // .pipe(replace(/(require\(['"])(@\/\.)(['"]\))/g, `$1${NAME}/${dir}$3`))
    // // require @/xxx
    // .pipe(replace(/(require\(['"])(@\/)([\w-\/]*['"]\))/g, `$1${NAME}/${dir}/$3`))
  );
}
