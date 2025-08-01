/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    '~/(.*)$': '<rootDir>/src/$1', // Example for mapping @src alias
    '^test/(.*)$': '<rootDir>/tests/$1', // Example for mapping views alias
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
