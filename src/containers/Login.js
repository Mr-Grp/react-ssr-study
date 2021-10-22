import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return <div>
    <Header></Header>
    <div>Login</div>
    <button onClick={() => console.log('Login')}>打印</button>
  </div>
}

export default Login