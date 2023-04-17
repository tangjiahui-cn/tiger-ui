module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // http://eslint.cn/docs/rules/
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: 'error',
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-debugger': 'error',
    'react/display-name': 'off',
  },
};
