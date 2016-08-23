require('../style/createNewGroup.scss');

import React, { Component } from 'react';
import { Link }   from 'react-router';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

import Header     from  '../components/Header';
import Categories from  '../components/Categories';
import Footer     from  '../components/Footer';
import GroupCard  from  '../components/GroupCard';

import { groupTypes, ageRanges, cities, sexTypes, categories } from '../components/siteConfig';

export default class CreateNewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      city: cities[0].engName,
      groupMoto: '',
      description: '',
      category: 'running',
      ageRange: '16-18',
      groupType: 'competision',
      sexType: 'all',
      categories:   categories,
      cities:       cities,
      ageRanges:    ageRanges,
      groupTypes:   groupTypes,
      sexTypes:     sexTypes
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-create-new-group">
          <form>
            <FormGroup>
            <div className="form-inner">
              <div className="right-side">
                <h2>צור קבוצה חדשה</h2>
                <HelpBlock>שם הקבוצה</HelpBlock>
                <FormControl
                  type="text"
                  value={this.state.groupName}
                  onChange={(event) => this.setState({groupName: event.target.value})}
                />
                <HelpBlock>הסבר בקצרה על הקבוצה</HelpBlock>
                <FormControl
                  componentClass="textarea"
                  rows="5"
                  value={this.state.description}
                  onChange={(event) => this.setState({description: event.target.value})}
                />
                <HelpBlock>מה המוטו של הקבוצה</HelpBlock>
                <FormControl
                  type="text"
                  value={this.state.moto}
                  onChange={(event) => this.setState({groupMoto: event.target.value})}
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
                    return <option value={city.engName} key={city.id}>
                             {city.name}
                           </option>
                  })}
                </FormControl>
                <HelpBlock>טווח גילאים</HelpBlock>
                <FormControl componentClass="select" placeholder="select">
                  {this.state.ageRanges.map((range) => {
                    return <option value={range.value} key={range.value}>
                             {range.name}
                           </option>
                  })}
                </FormControl>
                <HelpBlock>סוג הקבוצה</HelpBlock>
                <FormControl componentClass="select" placeholder="select">
                  {this.state.groupTypes.map((type) => {
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
              <div className="left-side">
                <h2>תצוגה מקדימה</h2>
                <ul className="group-card-preview">
                  <GroupCard groupInfo={this.state}/>
                </ul>
              </div>
            </div>
            </FormGroup>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
