import React from 'react';

const propTypes = {
  profile: React.PropTypes.object.isRequired,
};

function ProfileDetail({ profile }) {
  /* eslint-disable no-underscore-dangle */
  return (
    <div className="ProfileDetail">
      <p className="ProfileDetail--name">{profile.name} - {profile._id}</p>
      <p className="ProfileDetail--handiness">{profile.handiness}</p>
    </div>
  );
  /* eslint-enable no-underscore-dangle */
}

ProfileDetail.propTypes = propTypes;

export default ProfileDetail;
