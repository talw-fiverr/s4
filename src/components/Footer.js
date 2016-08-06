require('../style/footer.scss');
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <div className="copy-rights">&copy; SportGroups</div>
        <ul className="link-list">
          <li>שאלות ותשובות</li>
          <li>מדיניות פרטיות</li>
          <li>שיתופי פעולה</li>
          <li>צור קשר</li>
        </ul>
      </div>
    );
  }
}
