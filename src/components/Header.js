require('../style/header.scss');
import Login from  '../components/Login';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const popoverElemet = (
      <Popover id="popover-positioned-bottom">
        <Login />
      </Popover>
    );

    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to={`/`}>
            <i className="siteLogo"></i>
          </Link>
        </div>
        <OverlayTrigger rootClose={true} trigger="click" placement="left" overlay={popoverElemet}>
         <a href="/" onClick={(e) => e.preventDefault()} className="small-button">התחבר</a>
        </OverlayTrigger>
      </div>
    );
  }
}
