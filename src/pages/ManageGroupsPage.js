require('../style/manageGroupsPage.scss');

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
          <Link className="add-new-group-btn" to={`/create-new-group`}>
            <i className="add-btn"></i>
          </Link>
          <div className="my-groups">
            container for the groups you created.
          </div>
          <Link to={`/create-new-group`}>צור קבוצה חדשה</Link>
        </div>
        <Footer />
      </div>
    );
  }
}
