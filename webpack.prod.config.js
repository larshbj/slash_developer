var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, './public'),
    filename: 'app.bundle.js',
    publicPath: '/public/'
  },

  module: {
      loaders: [
          {
              test: [/\.jsx?$/, /\.es6$/],
              exclude: /node_modules/,
              loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react']
          },
          {
              test: [/\.scss$/, /\.css$/],
              loaders: ['style', 'css', 'sass']
          },
          {
            test: /mapbox-gl.+\.js$/,
            loader: 'transform/cacheable?brfs'
          },
          {
            test: /\.png$/,
            loader: 'url-loader',
            query: {mimetype: "image/png"}
          },
          {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
          }
      ]
  },
  resolve: {
      modulesDirectories: ['node_modules'],
      root: path.resolve(__dirname, "src"),
      extensions: ['', '.js', '.jsx'],
  },
  plugins: [
      new webpack.ProvidePlugin({
          "$":"jquery",
          "jQuery":"jquery",
          "window.jQuery":"jquery"
        })
  ]
};
