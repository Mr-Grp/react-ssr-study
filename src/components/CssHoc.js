import React, { Component } from 'react';

export default (Comp, styles) => {
  return class CssHoc extends Component {
    state = {}

    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return (
        <Comp {...this.props}></Comp>
      );
    }
  }
}