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
      favorites: [],
      selectedGroup: null
    };
  }

  onSelectedGroup(selectedGroup) {
    this.setState({selectedGroup});
  }

  render() {
    return (
      <div>
        <Header isConnected={false}/>
        <Categories />
        <Search groups={this.state.groups} />
        <Groups onSelectedGroup={this.onSelectedGroup.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
