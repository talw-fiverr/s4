require('../style/style.scss');

import React, { Component } from 'react';
import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Groups from      '../components/Groups';
import Search from      '../components/Search';
import Footer from      '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Search />
        <Groups />
        <Footer />
      </div>
    );
  }
}
