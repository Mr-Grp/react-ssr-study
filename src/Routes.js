import Home from './containers/Home'
import Login from './containers/Login'
import Error from './containers/Error'
import App from './App'


export default [{
  path: '/',
  component: App,
  key: 'app',
  routes: [{
    path: '/home',
    component: Home,
    loadData: Home.loadData,
    exact: true,
    key: 'home'
  }, {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }, {
    component: Error,
    key: 'error'
  }]
}]