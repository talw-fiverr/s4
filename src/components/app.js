require('../style/style.scss');

import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Search />
        <p className="test"> the main section of the app</p>
        <Footer />
      </div>
    );
  }
}
