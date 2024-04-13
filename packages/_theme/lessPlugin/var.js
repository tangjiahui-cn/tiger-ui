/**
 * less plugin
 *
 * @author tangjiahui
 * @date 2024/4/12
 * @description support use 'useVar' and 'setVar' and 'prefix' in less files.
 * */
const pkg = require('../../../package.json');
const varPrefix = `--${pkg.name}-var`;

function getVarName(name) {
  return `${varPrefix}-${name}`;
}

module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('useVar', function ({ value: name }) {
      return `var(${getVarName(name)})`;
    });
    functions.add('setVar', function (name, value) {
      return `${getVarName(name.value)}:${value.value};`;
    });
    functions.add('prefix', function ({ value: name }) {
      return `.${pkg.name}-${name}`;
    });
  },
};

module.exports.getVarName = getVarName;
