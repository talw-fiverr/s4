require('../style/appSearchForm.scss');
import React, { Component } from 'react';

export default class SearchForm extends Component {

  // called when a new instance is called
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    debugger;
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="app-search-form-wrapper"></div>
        <div className="app-search-form-inner">
          <input
            type="text"
            placeholder="שם קבוצה"
            className="app-input-text"
            value={this.state.term}
            onChange={this.onInputChange}>
          </input>
          <h1>{this.state.term}</h1>
        </div>
      </div>
    );
  }
}
