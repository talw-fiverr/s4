require('../style/header.scss');
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <img src="./images/sports-logo.png"></img>
        </div>
        <ul>
          <li><a className="small-button" href="!#">התחבר</a></li>
        </ul>
      </div>
    );
  }
}
