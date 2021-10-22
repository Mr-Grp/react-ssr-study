import express from 'express';
import { render } from './utils'
const app = express()

// 访问静态文件的时候，会去 public 目录里查找
app.use(express.static('public'))

app.get('*', function (req, res) {
  res.send(render(req))
})

const server = app.listen(3000)