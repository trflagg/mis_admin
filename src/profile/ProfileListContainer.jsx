import React from 'react';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';

export default class ProfileListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: '',

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
    const selectedProfile = this.state.profiles.find(profile => (
      profile.id === event.target.value
    ));
    this.setState({ selectedProfile });
  }

  render() {
    let profileDetail;
    if (this.state.selectedProfile) {
      profileDetail = <ProfileDetail profile={this.state.selectedProfile} />;
    }

    return (
      <div>
        <ProfileList
          profiles={this.state.profiles}
          selectedProfileId={this.state.selectedProfile.id}
          onSelectProfile={this.boundHandleSelectProfile}
        />
        {profileDetail}
      </div>
    );
  }
}
