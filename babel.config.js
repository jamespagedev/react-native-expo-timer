module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extentions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "@": "./",
            "@components": "./components",
          },
        },
      ],
      "jest-hoist",
    ],
  };
};
