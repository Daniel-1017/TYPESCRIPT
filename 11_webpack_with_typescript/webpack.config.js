// const path = require("path");

// module.exports = {
//   mode: "development", // helps during development
//   entry: "./src/app.ts",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"), // builds an absolute path to a certain folder
//     publicPath: "dist",
//   },
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.ts$/, // checks for the file extension
//         use: "ts-loader", // what to do with the ts files, they should be handled by the ts-loader
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".js"], // webpack will search for files with this extension
//   },
// };

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devtool: "inline-source-map",
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
  },
};
