module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>/javascript"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "testRegex": "(/__tests__/.*(\\.|/)(test|spec))\\.js?$",
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  "coverageDirectory": "coverage",
  "automock": false
}
