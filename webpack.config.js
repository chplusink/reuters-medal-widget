var path = require('path');

var libName = 'MedalWidget';
var fileName = 'medalWidget.js';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: libName,
    filename: fileName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
        ]
      }
    ]
  }
};
