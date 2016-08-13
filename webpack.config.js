var webpack = require('webpack'),
    path    = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.json/,
        exclude: /(node_modules)/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './build',
    port: 3000
  }
};
