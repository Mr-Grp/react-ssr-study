import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../Routes'
import { getClientStore } from '../store'
import { Provider } from 'react-redux'

const APP = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {routes.map(route => <Route {...route}></Route>)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<APP></APP>, document.getElementById('root'))