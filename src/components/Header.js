require('../style/header.scss');
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to={`/`}>
            <img src="./images/sports-logo.png"></img>
          </Link>
        </div>
        <ul>
          <li><a className="small-button" href="!#">התחבר</a></li>
        </ul>
      </div>
    );
  }
}
