import React, { Component } from 'react';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { actions } from './store'

class Home extends Component {
  state = {}

  // 只会在客户端渲染的时候被执行
  componentDidMount() {
    this.props.getHomeList()
  }

  getList = () => {
    return this.props.newsList.map(item => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return (
      <div>
        <>
          <Helmet
            title="My Title"
            meta={[
              { "name": "description", "content": "Helmet application" },
              { "property": "og:type", "content": "article" }
            ]}
            link={[
              { "rel": "canonical", "href": "http://mysite.com/example" },
              { "rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png" },
              { "rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png" }
            ]}
          />
        </>
        <button onClick={() => console.log('HOME')}>打印</button>
        {this.getList()}
      </div>
    );
  }
}

Home.loadData = (store) => {
  return store.dispatch(actions.getHomeList())
}


const mapStateToProps = (state) => ({
  newsList: state.home.newsList,
  name: state.home.name
})

const mapDispatchProps = dispatch => ({
  getHomeList() {
    dispatch(actions.getHomeList())
  }
})


export default connect(mapStateToProps, mapDispatchProps)(Home)