require('../style/registerPage.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';

import { userRegister } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Header from      '../components/Header';
import Footer from      '../components/Footer';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.register = this.register.bind(this);
  }

  register() {
    this.props.userRegister(this.state);
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
                <td><label>אימייל:</label></td>
                <td><input type="text" onChange={(event) => this.setState({email: event.target.value})}/></td>
              </tr>
              <tr>
                <td><label>סיסמא:</label></td>
                <td><input type="password" onChange={(event) => this.setState({password: event.target.value})}/></td>
              </tr>
              <tr>
                <td><label>חזור על סיסמא:</label></td>
                <td><input type="password"/></td>
              </tr>
            </tbody>
          </table>
          <p className="terms_and_services">
            <input type="checkbox" name="terms_and_services" value=""/>
            <span> אני מסכים ל <Link to={'/terms-and-conditions'}>תנאי השימוש</Link></span>
          </p>
          <hr></hr>
          <button type="button" onClick={this.register} className="register-btn small-button">הרשם</button>
        </form>
        <Footer position={'position-bottom'}/>
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
  return bindActionCreators({ userRegister: userRegister }, dispatch);
}
//
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
