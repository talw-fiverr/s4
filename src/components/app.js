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
      selectedGroup: null,
      currentUser: null
    };
  }

  componentWillMount() {
    // update user status
    firebase.auth().onAuthStateChanged(function(user) {
      this.userAuthUpade(user);
    }.bind(this));
  }

  userAuthUpade(userInfo) {
    this.setState({currentUser: userInfo });
  }

  onSelectedGroup(selectedGroup) {
    this.setState({selectedGroup});
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Categories />
        <Search groups={this.state.groups} />
        <Groups onSelectedGroup={this.onSelectedGroup.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
