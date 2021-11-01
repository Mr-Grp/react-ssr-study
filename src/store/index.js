import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as homeReducer } from '../containers/Home/store'
import thunk from 'redux-thunk'
import clientAxios from '../client/request'
import createAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createAxios(req))))
}

export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
