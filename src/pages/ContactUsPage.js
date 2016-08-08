import React, { Component } from 'react';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class ContactUsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div>This is the contact page</div>
        <Footer />
      </div>
    );
  }
}
