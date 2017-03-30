import React from 'react';
import './ProfileList.css';

const propTypes = {
  profiles: React.PropTypes.array,
  selectedProfileId: React.PropTypes.string,
  onSelectProfile: React.PropTypes.func,
};

const defaultProps = {
  profiles: [],
  selectedProfileId: '',
  onSelectProfile: () => {},
};

function ProfileList({ profiles, selectedProfileId, onSelectProfile }) {
  const profileListItems = profiles.map(profile => (
    <option key={profile.id} value={profile.id}>
      {profile.name} - {profile.id}
    </option>
  ));

  return (
    <select value={selectedProfileId} onChange={onSelectProfile}>
      {profileListItems}
    </select>
  );
}

ProfileList.propTypes = propTypes;
ProfileList.defaultProps = defaultProps;

export default ProfileList;
