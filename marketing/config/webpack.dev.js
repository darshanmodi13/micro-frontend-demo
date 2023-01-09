const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: { port: 3001, historyApiFallback: { index: "index.html" } },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
