require('../style/footer.scss');
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <div className="copy-rights">&copy; SportGroups</div>
        <ul className="link-list">
          <li><Link to={`/QA`}>שאלות ותשובות</Link></li>
          <li><Link to={`/privacy`}>מדיניות פרטיות</Link></li>
          <li><Link to={`/collaborations`}>שיתופי פעולה</Link></li>
          <li><Link to={`/about`}>עלינו</Link></li>
          <li><Link to={`/contactUs`}>צור קשר</Link></li>
        </ul>
      </div>
    );
  }
}
