var path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join('./bundles'),
    filename: 'app.bundle.js',
    publicPath: 'http://localhost:3000/bundles/'
  },

  module: {
      loaders: [
          {
              test: [/\.jsx?$/, /\.es6$/],
              exclude: /node_modules/,
              loaders: ['babel-loader']
          },
          {
              test: [/\.scss$/, /\.css$/],
              loaders: ['style', 'css', 'sass']
          }
      ]
  },
  // resolve: {
  //     modulesDirectories: ['node_modules'],
  //     root: path.resolve(__dirname, "src"),
  //     extensions: ['', '.js', '.jsx']
  // }
};
