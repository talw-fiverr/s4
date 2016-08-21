require('../style/registerPage.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

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
      password: '',
      verifyPassword: ''
    };

    this.register = this.register.bind(this);
  }

  register() {
    this.props.userRegister(this.state);
  }

  render() {
    return (
      <div className="app-register">
        <form className="register-form">
          <FormGroup>
            <div className="app-logo">
              <Link to={`/`}>
                <i className="siteLogo"></i>
              </Link>
            </div>
            <div className="form-inner">
              <HelpBlock>הכנס אימייל</HelpBlock>
              <FormControl
                type="text"
                value={this.state.email}
                onChange={(event) => this.setState({email: event.target.value})}
              />
              <HelpBlock>הכנס סיסמא (6 תווים או יותר)</HelpBlock>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={(event) => this.setState({password: event.target.value})}
              />
              <HelpBlock>הכנס סיסמא פעם נוספת</HelpBlock>
              <FormControl
                type="password"
                value={this.state.verifyPassword}
                onChange={(event) => this.setState({verifyPassword: event.target.value})}
              />
              <div className="terms_and_services">
                <input type="checkbox" name="terms_and_services" value=""/>&nbsp;
                <HelpBlock> אני מסכים ל <Link to={'/terms-and-conditions'}>תנאי השימוש</Link></HelpBlock>
              </div>
              <button type="button" onClick={this.register} className="register-btn small-button">הרשם</button>
              <p className="already-registered">
                <p> רשום כבר לאתר ? <Link to={`/login`}> התחבר </Link></p>
              </p>
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
  return bindActionCreators({ userRegister: userRegister }, dispatch);
}
//
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
