import express from 'express';
import Home from '../containers/Home'
import React from 'react';
import { renderToString } from 'react-dom/server'

const app = express()

// 访问静态文件的时候，会去 public 目录里查找
app.use(express.static('public'))

const content = renderToString(<Home></Home>)

app.get('/', function (req, res) {
  res.send(`
    <html>
      <header>
        <title>hello</title>
      </header>
      <body>
        <div id='root'>${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)

})

const server = app.listen(3000)