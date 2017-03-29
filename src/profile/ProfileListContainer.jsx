import React from 'react';
import ProfileList from './ProfileList';

export default class ProfileListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          id: '1234566',
          name: 'Taylor',
          handiness: 'right',
        },
        {
          id: '1111',
          name: 'User2',
          handiness: 'left',
        },
      ],
    };
  }

  render() {
    return (
      <ProfileList profiles={this.state.profiles} />
    );
  }
}
