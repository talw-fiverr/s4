import React, { Component } from 'react';
import { Link }   from 'react-router';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <form className="app-login">
          <label>שם משתמש:</label>
          <input type="text"/>
          <label>סיסמא:</label>
          <input type="password"/>
          <br/>
          <p>או</p>
          <Link to={`/sign-in`}>הרשם</Link>
        </form>
        <Footer />
      </div>
    );
  }
}
