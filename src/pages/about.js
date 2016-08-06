import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  render() {
    return (
      <div>this is the about page</div>
    );
  }
}

ReactDOM.render(<About />, document.querySelector('.container'));
