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
    return (
      <div className="app-groups">
        <ul>
          {this.state.groups.map((groupInfo) => {
            return <GroupCard groupInfo={groupInfo} key={groupInfo.id}/>
          })}
        </ul>
      </div>
    );
  }
}
