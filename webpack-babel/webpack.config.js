var path = require("path");
module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
