const path = require('path');
const webpack = require('webpack');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.'),
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
            // name: 'images/[hash]-[name].[ext]',
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.pug'),
      filename: './index.html',
      inject: false,
    }),
    new webpack.ProgressPlugin(),
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: false,
    }),
    new Visualizer(),
  ],
};
