const path = require('path')

const srcPath = path.resolve(__dirname, 'src')
const publicPath = path.resolve(__dirname, 'dist')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src',
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: publicPath,
    historyApiFallback: true,
    watchContentBase: true,
    stats: 'minimal',
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
}
