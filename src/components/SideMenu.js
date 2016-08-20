require('../style/sideMenu.scss');

import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';

import { userLogout } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.userLogout();
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

function mapStateToProps(state) {
  return {
    userAuth: state.userAuth
  };
}

function mapDispatchToProps(dispatch) {
  // when searchGroups is called, result is passed to all reducers
  return bindActionCreators({ userLogout: userLogout }, dispatch);
}
//
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
