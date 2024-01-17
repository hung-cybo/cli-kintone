/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ["<rootDir>/src", "<rootDir>/features"],
  clearMocks: true,
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "fixtures"],
  // testEnvironment: "allure-jest/node",
};
module.exports = config;
