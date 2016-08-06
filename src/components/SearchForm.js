require('../style/appSearchForm.scss');
import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <div className="app-search-form-wrapper"></div>
        <div className="app-search-form-inner">
          <input type="text" placeholder="שם קבוצה" className="app-input-text"></input>
        </div>
      </div>
    );
  }
}
