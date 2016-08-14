require('../style/groupPage.scss');
import React, { Component } from 'react';
import { Link }   from 'react-router';

import Header     from      '../components/Header';
import Categories from  '../components/Categories';
import Footer     from      '../components/Footer';

export default class GroupPage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app-group-page">
        <Header />
        group page number
        <Footer />
      </div>
    );
  }
}
