const { defineConfig } = require("@vue/cli-service");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        kakao: "kakao",
      }),
      new Dotenv(),
    ],
  },
};
