require('../style/header.scss');
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to={`/`}>
            <i className="siteLogo"></i>
          </Link>
        </div>
        <Link className="small-button" to={'/login'}>התחבר</Link>
      </div>
    );
  }
}
