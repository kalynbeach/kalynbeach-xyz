const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  // Add more setup options before each test is run
  setupFiles: ['./jest.setup.js'],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(config);
