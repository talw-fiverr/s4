require('../style/header.scss');
import SideMenu from  '../components/SideMenu';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    const connectBtnClasses = `small-button ${this.props.currentUser ? 'hidden' : ''}`;
    const registerBtnClasses = `register-btn ${this.props.currentUser ? 'hidden' : ''}`;

    return (
      <div className="app-header">
        <div className="app-logo">
          <Link to={`/`}>
            <i className="siteLogo"></i>
          </Link>
        </div>
        <SideMenu className="side-menu"  isConnected={this.props.currentUser}/>
         <a href="/login" className={connectBtnClasses}>התחבר</a>
         <a href="/register" className={registerBtnClasses}>הרשמה</a>
      </div>
    );
  }
}
