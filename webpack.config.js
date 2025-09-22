const path = require('path');

module.exports = {
  mode: 'production',    //开发模式
  entry: './src/main.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'bin'), // 输出路径
    filename: 'HI5SDK.js' // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 处理.js文件
        exclude: /node_modules/, // 排除node_modules目录
        use: {
          loader: 'babel-loader', // 使用babel-loader
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};