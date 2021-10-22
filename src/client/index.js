import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import store from '../store'
import { Provider } from 'react-redux'

const APP = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<APP></APP>, document.getElementById('root'))