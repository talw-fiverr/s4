require('../style/footer.scss');
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const footerClasses = `app-footer ${this.props.position}`;

    return (
      <div className={footerClasses}>
        <div className="copy-rights">&copy; SportGroups</div>
        <ul className="link-list">
          <li><Link to={`/qa`}>שאלות ותשובות</Link></li>
          <li><Link to={`/terms-and-conditions`}>תנאי שימוש</Link></li>
          <li><Link to={`/collaborations`}>שיתופי פעולה</Link></li>
          <li><Link to={`/about`}>אודות</Link></li>
          <li><Link to={`/contact-us`}>צור קשר</Link></li>
        </ul>
      </div>
    );
  }
}
