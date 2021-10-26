import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as homeReducer } from '../containers/Home/store'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
