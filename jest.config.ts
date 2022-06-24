module.exports = {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  silent: true,
  verbose: true,
};
