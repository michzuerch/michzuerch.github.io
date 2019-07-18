const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, ".")
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g)$/,
        use: [
          {
            options: {
              name: "[name].[ext]",
              outputPath: "images/"
            },
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.pug",
      filename: "./index.html",
      inject: false
    }),
    new VueLoaderPlugin()
  ]
};
