import React from 'react';
import Header from '../components/Header';
const Home = () => {
  return <div>
    <Header></Header>
    <div>HOME</div>
    <button onClick={() => console.log('HOME')}>打印</button>
  </div>
}

export default Home