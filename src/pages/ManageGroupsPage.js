import React, { Component } from 'react';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class ManageGroups extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div>this is the manage groups page</div>
        <Footer />
      </div>
    );
  }
}
