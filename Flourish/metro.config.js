const { withRozenite } = require("@rozenite/metro");
const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withRozenite(
  withUniwindConfig(config, {
    cssEntryFile: "./global.css",
    dtsFile: "./uniwind-types.d.ts",
    extraThemes: [],
  }),
  { enabled: process.env.WITH_ROZENITE === "true" }
);

