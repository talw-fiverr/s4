require('../style/search.scss');
import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-search">
        <SearchForm groups={this.props.groups}/>
      </div>
    );
  }
}
