let express = require('express')
let app = express()

// cors
/* let allowCrossDomain = function (req, res, next) { // 允许哪些请求
  // 允许的请求源 如，来自于http://localhost:8080
  res.header("Access-Control-Allow-Origin", "*"); // 允许所有
  // 允许请求头 如，要带上x-token
  res.header("Access-Control-Allow-Headers", "*"); // 允许所有
  // 允许请求方法 如，get、post、put、delete
  res.header("Access-Control-Allow-Methods", "*"); // 允许所有
  next();
}
app.use(allowCrossDomain); */

let webpack = require('webpack')
let middle = require('webpack-dev-middleware') // 中间件
let compiler = webpack(require('./webpack.config.js')) // 编译器
app.use(middle(compiler)) // 中间件的方式，把前后端放在一起

app.get('/user', (req, res) => {
  res.json({name: 'jack'})
})

app.listen(3001, () => {
  console.log('服务启动端口3001：http://localhost:3001/user');
})