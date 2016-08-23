require('../style/createNewGroup.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

import Header     from      '../components/Header';
import Categories from  '../components/Categories';
import Footer     from      '../components/Footer';

import { groupType, ageRange, cities, sexTypes, categories } from '../components/siteConfig';

export default class CreateNewGroup extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      groupName: '',
      city: '',
      moto: '',
      categories: categories,
      cities:     cities,
      ageRange:   ageRange,
      groupType:  groupType,
      sexTypes:   sexTypes
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-create-new-group">
          <form autocomplete="on">
            <FormGroup>
            <div className="form-inner">
              <h2>צור קבוצה חדשה</h2>
              <HelpBlock>שם הקבוצה</HelpBlock>
              <FormControl
                type="text"
                value={this.state.groupName}
                onChange={(event) => this.setState({groupName: event.target.value})}
              />
              <HelpBlock>מה המוטו של הקבוצה</HelpBlock>
              <FormControl
                type="text"
                value={this.state.moto}
                onChange={(event) => this.setState({moto: event.target.value})}
              />
              <HelpBlock>קטגוריה</HelpBlock>
              <FormControl componentClass="select" placeholder="select">
                {this.state.categories.map((category) => {
                  return <option value={category.value} key={category.value}>
                           {category.name}
                         </option>
                })}
              </FormControl>
              <HelpBlock>עיר</HelpBlock>
              <FormControl componentClass="select" placeholder="select">
                {this.state.cities.map((city) => {
                  return <option value={city.engName} key={city.engName}>
                           {city.name}
                         </option>
                })}
              </FormControl>
              <HelpBlock>טווח גילאים</HelpBlock>
              <FormControl componentClass="select" placeholder="select">
                {this.state.ageRange.map((range) => {
                  return <option value={range.value} key={range.value}>
                           {range.name}
                         </option>
                })}
              </FormControl>
              <HelpBlock>סוג הקבוצה</HelpBlock>
              <FormControl componentClass="select" placeholder="select">
                {this.state.groupType.map((type) => {
                  return <option value={type.value} key={type.value}>
                           {type.name}
                         </option>
                })}
              </FormControl>
              <HelpBlock>מין</HelpBlock>
              <FormControl componentClass="select" placeholder="select">
                {this.state.sexTypes.map((sex) => {
                  return <option value={sex.value} key={sex.value}>
                           {sex.name}
                         </option>
                })}
              </FormControl>
            </div>
            </FormGroup>
          </form>
          <div className="group-card-preview">

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
