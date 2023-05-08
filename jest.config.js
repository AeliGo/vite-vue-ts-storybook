module.exports = {
  moduleFileExtensions: ["vue", "js", "ts"],
  // preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
  // collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     statements: 90,
  //   },
  // },
};
