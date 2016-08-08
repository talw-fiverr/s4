import React, { Component } from 'react';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class CollaborationsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div>This is the collaborations page</div>
        <Footer />
      </div>
    );
  }
}
