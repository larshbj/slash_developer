var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'eval',

  output: {
    path: path.join(__dirname, './bundles'),
    filename: 'app.bundle.js',
    publicPath: 'http://localhost:3000/bundles/'
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
                loader: 'file?name=public/fonts/[name].[ext]'
          }
      ]
  },
  resolve: {
      modulesDirectories: ['node_modules'],
      root: path.resolve(__dirname, "src"),
      extensions: ['', '.js', '.jsx'],
      alias: {
        'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
      }
  }
};
