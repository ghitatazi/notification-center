export default {
  clearMocks: true,
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["ts-jest"],
  },
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
};
