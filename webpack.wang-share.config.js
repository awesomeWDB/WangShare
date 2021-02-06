const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: "production",
  entry: "./src/wang-share/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "wang-share.js",
    library: "WangShare",// 在全局变量中增加一个library变量
    libraryTarget: "umd"
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader' // less-loader 依赖于 less
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ //注意版本问题 https://www.npmjs.com/package/babel-loader
            ['@babel/preset-env', { modules: false }]
          ]
        }
      }
    }, {
      test: /\.vue$/,
      use: ['vue-loader']// 依赖于 vue-template-compiler,需要额外安装
    }]
  }
}