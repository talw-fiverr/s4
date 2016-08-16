require('../style/header.scss');
import Login from  '../components/Login';
import SideMenu from  '../components/SideMenu';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    const popoverElemet = (
      <Popover id="popover-positioned-bottom"><Login /></Popover>
    );

    const connectBtnClasses = `small-button ${this.props.isConnected ? 'hidden' : ''}`;

    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to={`/`}>
            <i className="siteLogo"></i>
          </Link>
        </div>
        <SideMenu className="side-menu"  isConnected={this.props.isConnected}/>
        <OverlayTrigger rootClose={true} trigger="click" placement="left" overlay={popoverElemet}>
         <a href="/" onClick={(e) => e.preventDefault()} className={connectBtnClasses}>התחבר</a>
        </OverlayTrigger>
      </div>
    );
  }
}
