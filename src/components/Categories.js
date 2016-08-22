require('../style/categories.scss');
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class Categories extends Component {


  render() {
    return (
      <div className="app-categories">
        <ul className="link-list">
          <li><Link to={`/category/running`}>ריצה</Link></li>
          <li><Link to={`/category/swimming`}>שחיה</Link></li>
          <li><Link to={`/category/bicycle`}>אופניים</Link></li>
          <li><Link to={`/category/football`}>כדורגל</Link></li>
          <li><Link to={`/category/basketball`}>כדורסל</Link></li>
          <li><Link to={`/category/triatlon`}>תריאטלון</Link></li>
          <li><Link to={`/category/trx`}>טירקס</Link></li>
          <li><Link to={`/category/surf`}>גלישה</Link></li>
          <li><Link to={`/category/sap`}>סאפ</Link></li>
          <li><Link to={`/category/tennis`}>טניס</Link></li>
          <li><Link to={`/category/gymnastics`}>אתלטיקה</Link></li>
          <li><Link to={`/category/judo`}>גודו</Link></li>
          <li><Link to={`/category/other`}>אחר</Link></li>
        </ul>
      </div>
    );
  }
}
