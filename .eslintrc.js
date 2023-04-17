module.exports = {
  env: {
    browser: true,
    node: true,
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
      version: '18.2.0',
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
