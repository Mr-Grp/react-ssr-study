import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';

const Home = (props) => {
  return <div>
    <Header></Header>
    <div>{props.name}</div>
    <button onClick={() => console.log('HOME')}>打印</button>
  </div>
}

const mapStateToProps = (state) => ({
  name: state.name
})
export default connect(mapStateToProps)(Home)