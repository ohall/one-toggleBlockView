module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      } ,
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};