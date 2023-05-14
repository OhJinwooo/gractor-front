const { defineConfig } = require("@vue/cli-service");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    devServer: {
      host: "0.0.0.0",
      // host: "test.gractor.com",
      // proxy: "http://localhost:8000",
      allowedHosts: "all",
    },
    plugins: [
      new webpack.ProvidePlugin({
        kakao: "kakao",
      }),
      new Dotenv(),
    ],
  },
};
