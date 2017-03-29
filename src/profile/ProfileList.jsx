import React from 'react';
import './ProfileList.css';

const propTypes = {
  profiles: React.PropTypes.array,
};

const defaultProps = {
  profiles: [],
};

function ProfileList({ profiles }) {
  const profileListItems = profiles.map(profile => (
    <li key={profile.id}>
      {profile.name}
    </li>
  ));

  return (
    <ul className="ProfileList">
      {profileListItems}
    </ul>
  );
}

ProfileList.propTypes = propTypes;
ProfileList.defaultProps = defaultProps;

export default ProfileList;
