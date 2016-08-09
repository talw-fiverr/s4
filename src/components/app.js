require('../style/style.scss');

import React, { Component } from 'react';
import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Groups from      '../components/Groups';
import Search from      '../components/Search';
import Footer from      '../components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          description: 'קבוצה זו עוסקת בספורט אתגרי, אם אתה תחרותי ומחפש אתגרים מקומך איתנו',
          id: '1'
        },
        {
          description: 'קבוצת חזרה לכושר',
          id: '2'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Search />
        <Groups groups={this.state.groups}/>
        <Footer />
      </div>
    );
  }
}
