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
          <h3>צור חשבון חדש</h3>
          <hr></hr>
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
                <td><label>חזור על סיסמא:</label></td>
                <td><input type="password"/></td>
              </tr>
            </tbody>
          </table>
          <p className="terms_and_services">
            <input type="checkbox" name="terms_and_services" value=""> אני מסכים ל <Link to={'/terms-and-conditions'}>תנאי השימוש</Link></input>
          </p>
          <hr></hr>
          <button type="submit" onClick={this.login} className="register-btn small-button">הרשם</button>
        </form>
        <Footer position={'position-bottom'}/>
      </div>
    );
  }
}
