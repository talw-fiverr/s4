require('../style/sideMenu.scss');

import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();
    console.log('user logged out');
  }

  render() {
    const sideMenuClasses = `${this.props.isConnected ? '' : 'hidden'}`;

    return (
      <div className={sideMenuClasses}>
        <Menu right >
          <Link id="home"     className="menu-item" to="/">ניהול קבוצות</Link>
          <Link id="about"    className="menu-item" to="/about">הקבוצות שאהבתי</Link>
          <Link id="contact"  className="menu-item" to="/contact">הגדרות</Link>
          <Link id="contact"  className="menu-item" to="/logout" onClick={this.logout}>התנתק</Link>
        </Menu>
      </div>
    );
  }
}
