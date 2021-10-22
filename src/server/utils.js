import React from 'react';
import { renderToString } from 'react-dom/server'
import Routes from '../Routes';
import { StaticRouter } from 'react-router-dom'
import store from '../store'
import { Provider } from 'react-redux'

export const render = (req) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <header>
        <title>hello</title>
      </header>
      <body>
        <div id='root'>${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `
}