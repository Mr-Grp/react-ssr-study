import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from '../Routes'
import { getClientStore } from '../store'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

const APP = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<APP></APP>, document.getElementById('root'))