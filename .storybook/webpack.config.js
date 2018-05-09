const path = require('path');
const includePath = path.resolve(__dirname, '..');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: includePath,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
               sourceMap: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};