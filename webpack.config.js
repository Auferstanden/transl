const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/index.html'),
      filename: 'index.html',
      inlineSource: '.(css|js)$',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
    open: true,
    historyApiFallback: true,
    hot: true,
    index: 'index.html',
    overlay: {
      warnings: true,
      errors: true,
    },
    watchContentBase: true,
  },
}
