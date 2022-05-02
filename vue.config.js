const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin({
      analyzerPort: 9001
    })],
  },
  transpileDependencies: ["vuetify"],
});
