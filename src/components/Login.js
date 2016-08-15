require('../style/login.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  login(e) {
    debugger;
    e.preventDefault();
    console.log('login pressed');
  }

  render() {
    return (
      <div className="app-login">
        <form className="login-form">
          <table>
            <tbody>
              <tr>
                <td><label>שם משתמש:</label></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td><label>סיסמא:</label></td>
                <td><input type="password"/></td>
              </tr>
              <tr>
                <td></td>
                <td className="btn-container">
                  <a href="!#" onClick={this.login} className="login-btn small-button">התחבר</a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
