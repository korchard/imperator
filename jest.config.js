module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/lib/',
    '/server/models',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.node.json',
    },
  },
};
