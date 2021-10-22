import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      Header
      <br />
      <Link to='/'>首页</Link>
      <br />
      <Link to='/login'>登录</Link>
    </div>
  );
};

export default Header;