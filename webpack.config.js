const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "./src/index.jsx")],
  devtool: "eval-source-map",
  mode: "none", // setting this to none to avoid the Webpack Magic that's included when this is set to development or production
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: path.resolve(__dirname, "dist/index.html")
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
