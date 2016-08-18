require('../style/appSearchForm.scss');
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { searchGroups } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchForm extends Component {

  // called when a new instance is called
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
      city: 'all',
      group_level: 'all',
      group_size: 'all',
      group_age: 'all',
      group_sex_type: 'all'
    };
  }

  onInputChange(event) {
    this.setState({ category: event.target.value });
    console.log(event);
  }

  searchGroups(e) {
    e.preventDefault();
    console.log('search');
  }

  render() {
    return (
      <div>
        <form className="app-search-form-inner">
          <select dir="rtl" className="category" onChange={(event) => this.setState({ category: event.target.value })}>
            <option value="" disabled selected>קטגוריה</option>
            <option value="running">ריצה</option>
            <option value="swimming">שחיה</option>
            <option value="walking">הליכה</option>
            <option value="all">הכל</option>
          </select>
          <select dir="rtl" onChange={(event) => this.setState({ city: event.target.value })}>
            <option value="" disabled selected>עיר</option>
            <option value="pardes-hana">פרדס חנה</option>
            <option value="carcur">כרכור</option>
            <option value="netania">נתניה</option>
          </select>
          <select dir="rtl" onChange={(event) => this.setState({ group_level: event.target.value })}>
            <option value="" disabled selected>סוג הקבוצה</option>
            <option value="personal">מותאם אישית</option>
            <option value="after-pregnency">אחרי הריון</option>
            <option value="move-the-body">להזיז קצת את הגוף</option>
            <option value="back-in-shape">חוזרים לכושר</option>
            <option value="compatition">תחרותי</option>
            <option value="all">הכל</option>
          </select>
          <select dir="rtl" onChange={(event) => this.setState({ group_size: event.target.value })}>
            <option value="" disabled selected>גודל הקבוצה</option>
            <option value="1-5">1-5</option>
            <option value="5-10">5-10</option>
            <option value="10-20">10-20</option>
            <option value="20-40">20-40</option>
            <option value="40-100">40-100</option>
            <option value="100+">100+</option>
            <option value="all">כל הגדלים</option>
          </select>
          <select dir="rtl" onChange={(event) => this.setState({ group_age: event.target.value })}>
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
            <option value="all">כל הגילאים</option>
          </select>
          <select dir="rtl" onChange={(event) => this.setState({ group_sex_type: event.target.value })}>
            <option value="" disabled selected>מין</option>
            <option value="boys">בנים</option>
            <option value="girls">בנות</option>
            <option value="all">מעורב</option>
          </select>
          {/*<a href="!#" onClick={(e) => this.searchGroups(e)} className="search-btn small-button">חפש</a>*/}
          <span onClick={() => this.props.searchGroups('tal waserman')} className="search-btn small-button">חפש</span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

// anything returned from this function will end up as props
// on SearchForm container
function mapDispatchToProps(dispatch) {
  // when searchGroups is called, result is passed to all reducers
  return bindActionCreators({ searchGroups: searchGroups }, dispatch);
}

// promote SearchForm from coponent to container
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
