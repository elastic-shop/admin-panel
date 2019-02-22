module.exports = {
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__test__/.*|(\\.|/)(test|spec))\\.js?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupFiles: ['<rootDir>/test/enzyme.config.js'],
}