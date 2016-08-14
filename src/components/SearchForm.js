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
            <option value="running">ריצה</option>
            <option value="swimming">שחיה</option>
            <option value="walking">הליכה</option>
            <option value="all">הכל</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>עיר</option>
            <option value="pardes-hana">פרדס חנה</option>
            <option value="carcur">כרכור</option>
            <option value="netania">נתניה</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>סוג הקבוצה</option>
            <option value="personal">מותאם אישית</option>
            <option value="after-pregnency">אחרי הריון</option>
            <option value="move-the-body">להזיז קצת את הגוף</option>
            <option value="back-in-shape">חוזרים לכושר</option>
            <option value="compatition">תחרותי</option>
            <option value="all">הכל</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>גודל הקבוצה</option>
            <option value="1-5">1-5</option>
            <option value="5-10">5-10</option>
            <option value="10-20">10-20</option>
            <option value="20-40">20-40</option>
            <option valu="40-100">40-100</option>
            <option valu="100+">100+</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>טווח גילאים</option>
            <option value="10-12">10-12</option>
            <option value="12-14">12-14</option>
            <option value="14-16">14-16</option>
            <option value="16-18">16-18</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35-45">35-45</option>
            <option value="45-55">45-55</option>
            <option value="55-65">55-65</option>
            <option value="65-75">65-75</option>
          </select>
          <select dir="rtl">
            <option value="" disabled selected>מין</option>
            <option value="boys">בנים</option>
            <option value="girls">בנות</option>
            <option value="all">מעורב</option>
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
