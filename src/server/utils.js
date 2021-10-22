import React from 'react';
import { renderToString } from 'react-dom/server'
import Routes from '../Routes';
import { StaticRouter } from 'react-router-dom'

export const render = (req) => {
  const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
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