import React from 'react';
import ProfileList from './ProfileList';

export default class ProfileListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfileId: '',

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
    this.boundHandleSelectProfile = this.handleSelectProfile.bind(this);
  }

  handleSelectProfile(event) {
    this.setState({ selectedProfileId: event.target.value });
  }

  render() {
    return (
      <ProfileList
        profiles={this.state.profiles}
        selectedProfileId={this.state.selectedProfileId}
        onSelectProfile={this.boundHandleSelectProfile}
      />
    );
  }
}
