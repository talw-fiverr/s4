require('../style/groupCard.scss');
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class GroupCard extends Component {
  constructor(props) {
    super(props);
  }

  generateRating(number) {
    let i;
    let ratingArray = [];
    for (i = 0 ; i < this.props.groupInfo.rating ; i++) {
      ratingArray.push(<li key={i}><i/></li>);
    }
    return ratingArray;
  }

  render() {
    const headerClasses = `card-header ${this.props.groupInfo.sportType}`;
    const badgesClasses = `sport ${this.props.groupInfo.sportType}`;
    return (
        <li className="app-groupCard">
          <div className={headerClasses}>

            <ul className="rating">
              {this.generateRating(1)}
            </ul>
            <p className="group-name">{this.props.groupInfo.groupName}</p>
            <p className="group-moto">{this.props.groupInfo.groupMoto}</p>
          </div>
          <p className="description">{this.props.groupInfo.description}</p>
          <div className="badges">
            <svg className={badgesClasses}/>
            <svg className="heart-selected"/>
          </div>
        </li>
    );
  }
}
