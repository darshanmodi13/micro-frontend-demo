module.exports = {
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  module: {
    rules: [
      {
        test: /\.m?(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
