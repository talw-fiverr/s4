import React, { Component } from 'react';
import { Link }   from 'react-router';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class CreateNewGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: ''
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-create-new-group">
          this is the page for creating new group
          <form>
            <label>שם הקבוצה:</label>
            <input
              type="text"
              value={this.state.groupName}
              onChange={event => this.setState({ groupName: event.target.value })}
            />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
