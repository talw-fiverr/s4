require('../style/loginPage.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { FormGroup, FormControl } from 'react-bootstrap';

import { userLogin } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from      '../components/Header';
import Footer from      '../components/Footer';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

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
        <form className="register-form">
          <FormGroup>
          <div className="app-logo">
            <Link to={`/`}>
              <i className="siteLogo"></i>
            </Link>
          </div>
          <div className="form-inner">
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="הכנס אימייל"
              onChange={(event) => this.setState({email: event.target.value})}
            />
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="הכנס סיסמא"
              onChange={(event) => this.setState({password: event.target.value})}
            />
            <button type="button" onClick={this.login} className="login-btn small-button">התחבר</button>
            <p>עוד לא נרשמת?<Link to={`/register`}> הרשם עכשיו </Link></p>
          </div>
          </FormGroup>
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
  return bindActionCreators({ userLogin: userLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
