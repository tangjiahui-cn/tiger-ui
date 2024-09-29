import pkg from '../../../package.json';

const varPrefix = `--${pkg.name}-var`;
export function getVarName(name: string) {
  return `${varPrefix}-${name}`;
}
