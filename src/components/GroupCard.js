require('../style/groupCard.scss');
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class GroupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.groupInfo.description
    };
  }

  render() {
    return (
        <li className="app-groupCard">
          <img className="groupImage" src="http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg"></img>
          <p className="description">{this.state.description}</p>
        </li>
    );
  }
}
