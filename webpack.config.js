const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        },
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.html$/,
        use:{
            loader:"raw-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
