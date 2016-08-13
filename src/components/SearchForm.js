require('../style/appSearchForm.scss');

import React, { Component } from 'react';
export default class SearchForm extends Component {

  // called when a new instance is called
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="app-search-form-inner">
          <select dir="rtl" className="category">
            <option value="" disabled selected>קטגוריה</option>
            <option>ריצה</option>
            <option>שחיה</option>
            <option>הליכה</option>
            <option>הכל</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>עיר</option>
            <option>פרדס חנה</option>
            <option>כרכור</option>
            <option>נתניה</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>סוג הקבוצה</option>
            <option>מותאם אישית</option>
            <option>אחרי הריון</option>
            <option>להזיז קצת את הגוף</option>
            <option>חוזרים לכושר</option>
            <option>תחרותי</option>
            <option>הכל</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>גודל הקבוצה</option>
            <option>1-5</option>
            <option>5-10</option>
            <option>10-20</option>
            <option>20-40</option>
            <option>40-100</option>
            <option>100+</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>טווח גילאים</option>
            <option>10-12</option>
            <option>12-14</option>
            <option>14-16</option>
            <option>16-18</option>
            <option>18-25</option>
            <option>25-35</option>
            <option>35-45</option>
            <option>45-55</option>
            <option>55-65</option>
            <option>65-75</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>מין</option>
            <option>בנים</option>
            <option>בנות</option>
            <option>מעורב</option>
          </select>
          {/*<input
            type="text"
            placeholder="שם קבוצה"
            className="app-input-text"
            value={this.state.term}
            onChange={this.onInputChange}>
          </input>*/}
          <a href="!#" className="search-btn small-button">חפש</a>
        </div>
      </div>
    );
  }
}
