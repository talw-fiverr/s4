require('../style/groupCard.scss');
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class GroupCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = `card-header ${this.props.groupInfo.sportType}`;
    return (
        <li className="app-groupCard">
          <i className={classes}>
            <p className="group-name">{this.props.groupInfo.groupName}</p>
          </i>
          <p className="description">{this.props.groupInfo.description}</p>
          <p className="badges"></p>
        </li>
    );
  }
}
