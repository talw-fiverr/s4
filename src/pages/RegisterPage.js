require('../style/registerPage.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import Header from      '../components/Header';
import Footer from      '../components/Footer';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  login(e) {
    debugger;
    e.preventDefault();
    console.log('register pressed');
  }

  render() {
    return (
      <div className="app-register">
        <Header hideLogin="hidden"/>
        <form className="register-form">
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
                  <a href="!#" onClick={this.login} className="register-btn small-button">הרשם</a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <Footer position={'position-bottom'}/>
      </div>
    );
  }
}
