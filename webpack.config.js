const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('./package.json')
const dayjs = require('dayjs')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web-utils.js',
    library: {
      name: 'butils',
      type: 'umd'
    },
    globalObject: 'this'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => {
        return Object.entries({
          name: pkg.name,
          version: pkg.version,
          description: pkg.description,
          author: pkg.author,
          homepage: pkg.homepage,
          date: dayjs().format('YYYY-MM-DD HH:mm:ss')
        })
          .map((e) => `${e[0]}: ${e[1]}`)
          .join('\n')
      }
    })
  ]
}
