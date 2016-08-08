import React, { Component } from 'react';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class QaPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div>This is the QA page</div>
        <Footer />
      </div>
    );
  }
}
