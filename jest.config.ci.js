/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ["<rootDir>/src", "<rootDir>/features"],
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/__tests__/setup.ts",
    "fixtures"
  ],
  testEnvironment: "allure-jest/node",
};
module.exports = config;
