// 添加依赖/加载依赖包
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口 模块化
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'index.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    publicPath: '/' // 公共资源路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html' // 指定模板
    })
  ]
  // devServer: {
  //   proxy: { // 代理
  //     '/api': { // 拦截过滤以/api开头的,代理到后端的url
  //       target: 'http://localhost:3001'
  //     }
  //   }
  // }
}