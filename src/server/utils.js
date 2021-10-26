import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

export const render = (store, routes, req) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>
          {routes.map(route => <Route {...route}></Route>)}
        </div>
      </StaticRouter>
    </Provider>
  )

  return (`
    <html>
      <header>
        <title>hello</title>
      </header>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>
  `)

}