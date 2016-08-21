require('../style/loginPage.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { FormGroup, FormControl } from 'react-bootstrap';

import Header from      '../components/Header';
import Footer from      '../components/Footer';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

  }


  render() {
    return (
      <div className="app-login">
        <form className="register-form">
          <FormGroup>
          <div className="app-logo">
            <i className="siteLogo"></i>
          </div>
          <div className="form-inner">
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="הכנס אימייל"
              onChange={(event) => this.setState({email: event.target.value})}
            />
            <FormControl
              type="text"
              value={this.state.password}
              placeholder="הכנס סיסמא"
              onChange={(event) => this.setState({password: event.target.value})}
            />
            <button type="button" onClick={this.register} className="login-btn small-button">הרשם</button>
            <p>עוד לא נרשמת?<Link to={`/register`}> הרשם עכשיו </Link></p>
          </div>
          </FormGroup>
        </form>
        <Footer position={'position-bottom'}/>
      </div>
    );
  }
}
