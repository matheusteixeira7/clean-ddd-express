export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  rootDir: 'src',
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '#seedwork/(.*)': '<rootDir>/@seedwork/$1',
    '#modules/(.*)': '<rootDir>/modules/$1'
  },
  coveragePathIgnorePatterns: [
    '.*\\.model\\..*', // exclude all files with *.model.* in the filename
  ]
}
