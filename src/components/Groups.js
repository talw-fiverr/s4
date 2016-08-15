require('../style/groups.scss');
import React, { Component } from 'react';
import GroupCard from '../components/GroupCard'
export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: props.groups
    };
  }

  render() {
    if(this.props.groups.length === 0) {
      return <div>No results</div>;
    }

    return (
      <div className="app-groups">
        <ul>
          {this.state.groups.map((groupInfo) => {
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
