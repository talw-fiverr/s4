import React, { Component } from 'react';
import { Link }   from 'react-router';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class ManageGroups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <div className="app-manage-group">
          this is the manage groups page
          <Link to={`/create-new-group`}>צור קבוצה חדשה</Link>
        </div>
        <Footer />
      </div>
    );
  }
}
