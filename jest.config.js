/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    //
    // or use 'identity-obj-proxy' to mock css module.
    // '^.+\\.less$': '<rootDir>/scripts/jest/mockModule.js',
  },
  transform: {
    '^.+\\.less$': 'jest-css-modules-transform',
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(jest))'],
};