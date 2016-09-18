module.exports = {
  entry: './src/entry.js',
  output: {
    path: './bin',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
