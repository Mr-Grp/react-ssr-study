import React, { Component } from 'react';
class Error extends Component {
  state = {}


  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.NOT_FOUND = true
    }
  }

  render() {
    return (
      <div>
        404
      </div>
    );
  }
}

export default Error;