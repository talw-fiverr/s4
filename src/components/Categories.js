require('../style/categories.scss');
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

export default class Categories extends Component {
  render() {
    return (
      <div className="app-categories">
        <ul className="link-list">
          <li><Link to={`/categoryPage/running`}>ריצה</Link></li>
          <li><a href="!#">הליכה</a></li>
          <li><a href="!#">שחיה</a></li>
          <li><a href="!#">אופנים</a></li>
          <li><a href="!#">כדורגל</a></li>
          <li><a href="!#">כדורסל</a></li>
          <li><a href="!#">טריאתלון</a></li>
          <li><a href="!#">משקולות</a></li>
          <li><a href="!#">גלישה</a></li>
          <li><a href="!#">סאפ</a></li>
          <li><a href="!#">טניס</a></li>
          <li><a href="!#">אתלטיקה</a></li>
          <li><a href="!#">אומנויות לחימה</a></li>
          <li><a href="!#">אחר</a></li>
        </ul>
      </div>
    );
  }
}
