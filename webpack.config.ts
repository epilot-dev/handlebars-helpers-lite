const { peerDependencies } = require("./package.json");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      url: require.resolve("url/"),
      fs: false,
      crypto: false,
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "handlebars-helpers-lite",
    libraryTarget: "umd",
    globalObject: "this",
  },
  externals: [...Object.keys(peerDependencies)],
};
