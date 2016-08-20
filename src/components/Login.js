require('../style/login.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { userLogin } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this);
  }

  login(e) {
    debugger;
    e.preventDefault();
    this.props.userLogin(this.state);
  }

  render() {
    return (
      <div className="app-login">
        <form className="login-form">
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

function mapStateToProps(state) {
  return {
    userAuth: state.userAuth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userLogin: userLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
