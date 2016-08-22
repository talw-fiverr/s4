require('../style/groups.scss');
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupCard from '../components/GroupCard'

export default class Groups extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.groups) {
      return (
        <div className="no-data">

          <p><i className="fa fa-meh-o" aria-hidden="true"></i> אין תוצאות</p>
        </div>
    );
    }

    return (
      <div className="app-groups">
        <ul>
          {this.props.groups.map((groupInfo) => {
            return <GroupCard
                      groupInfo={groupInfo}
                      key={groupInfo.id}
                      onSelectedGroup = {this.props.onSelectedGroup}
                      />
          })}
        </ul>
      </div>
    );
  }
}

// map reducer state to container props
function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

// promote App from coponent to container
export default connect(mapStateToProps)(Groups);
