require('../style/search.scss');
import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

export default class Search extends Component {
  render() {
    return (
      <div className="app-search">
        <SearchForm />
      </div>
    );
  }
}
