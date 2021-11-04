import express from 'express';
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import { getStore } from '../store'
import routes from '../Routes';
import proxy from 'express-http-proxy'
const app = express()

// 访问静态文件的时候，会去 public 目录里查找
app.use(express.static('public'))

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', function (req, res) {
  const store = getStore(req)
  // 如果在请求时，先初始化当前路由下 store 的内容，就可以正常展示了
  // 1. 将需求请求的数据，配置到静态方法中
  // 2. 在路由设置中，配置需要请求的静态方法
  // 3. 在请求时，找到匹配到的路由配置项 matchPath 和 matchRoutes 都可以
  // 4. 根据配置项，让 matchRoutes 的 loadData 方法执行，注入 store

  // 问题 1. favicon.ico 问题
  // 如果请求会额外打印一次空数组，因为请求了 favicon.icon 但没找到静态文件，进入了路由拦截器

  // 问题 2. 多级路由问题
  // 二级路由匹配不到，匹配到的是一级路由
  // 可以使用 matchRoutes
  // npm i -S react-router-config

  // Did not expect server HTML to contain a <li> in <ul>

  // 匹配路由方法2
  const matchedRoutes = matchRoutes(routes, req.path)
  // console.log(matchedRoutes)

  const promises = []

  // 获取数据
  matchedRoutes.forEach((item) => {
    // 问题 1 这样还是不会有数据，因为是异步的
    // item.route.loadData(store)

    if (item.route.loadData) {
      // 防止失败，不能走到 Promise.all
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)

    }
  })


  // corejs@3 promise 用不了

  // 注水和脱水

  Promise.all(promises).then(() => {
    const context = {}
    const html = render(store, routes, req, context)
    // 页面渲染后，context 会被赋值
    console.log(context)
    if (context.NOT_FOUND) {
      // 进入 404 页面后，在页面里对 context 进行赋值
      res.status(404)
      res.send(html)
    } else if (context.action === 'REPLACE') {
      // 页面中如果使用了 Redirect，会往 context 中加入一条数据
      res.redirect(301, context.url)
    } else {
      res.send(html)
    }
  }).catch(() => {
    // 如果 promises 存在错误，会走到这里
    // 希望把 所有 加载正确 的接口返回，但是catch 不会等所有结果请求完，请求到错误就返回，不符合预期
    // 通过 promise 处理
  })

})

const server = app.listen(3000)