import React, { Component } from 'react';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { actions } from './store'
import CssHoc from '../../components/CssHoc'
import styles from './index.css';

class Home extends Component {
  state = {}

  // 可以使用 hoc ，传入 styles
  // componentWillMount() {
  //   if (this.props.staticContext) {
  //     this.props.staticContext.css.push(styles._getCss())
  //   }
  // }

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
        <div className={styles.test}>
          {this.getList()}
        </div>
      </div>
    );
  }
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

const HomeApp = connect(mapStateToProps, mapDispatchProps)(CssHoc(Home, styles))

HomeApp.loadData = (store) => {
  return store.dispatch(actions.getHomeList())
}

// connect 会将 loadData 挂载
// 其他 hoc 注意处理
export default HomeApp