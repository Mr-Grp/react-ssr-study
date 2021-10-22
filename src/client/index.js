import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'

const APP = () => {
  return <BrowserRouter>
    {Routes}
  </BrowserRouter>
}
ReactDom.hydrate(<APP></APP>, document.getElementById('root'))