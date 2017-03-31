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
  /* eslint-disable no-underscore-dangle */
  const profileListItems = profiles.map(profile => (
    <option key={profile._id} value={profile._id}>
      {profile.name} - {profile._id}
    </option>
  ));

  /* eslint-enable no-underscore-dangle */

  return (
    <div className="ProfileList">
      Select Profile:
      <select value={selectedProfileId} onChange={onSelectProfile}>
        {profileListItems}
      </select>
    </div>
  );
}

ProfileList.propTypes = propTypes;
ProfileList.defaultProps = defaultProps;

export default ProfileList;
