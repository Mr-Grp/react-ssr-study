import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Helmet from "react-helmet";

export const render = (store, routes, req, context) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  )

  let head = Helmet.renderStatic();
  return (`
    <html>
      <header>
        ${head.title.toString()}
        ${head.link.toString()}
        ${head.meta.toString()}
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