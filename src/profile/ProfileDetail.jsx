import React from 'react';

const propTypes = {
  profile: React.PropTypes.object.isRequired,
};

function ProfileDetail({ profile }) {
  return (
    <div className="ProfileDetail">
      <p className="ProfileDetail--name">{profile.name} - {profile.id}</p>
      <p className="ProfileDetail--handiness">{profile.handiness}</p>
    </div>
  );
}

ProfileDetail.propTypes = propTypes;

export default ProfileDetail;
