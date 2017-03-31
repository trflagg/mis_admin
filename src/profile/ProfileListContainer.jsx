import React from 'react';
import { connect } from 'react-redux';
import { getProfiles, selectProfile } from '../actions';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';

class ProfileListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.boundHandleSelectProfile = this.handleSelectProfile.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getProfiles());
  }

  handleSelectProfile(event) {
    const { dispatch, profiles } = this.props;

    /* eslint-disable no-underscore-dangle */
    const selectedProfile = profiles.find(profile => (
      profile._id === event.target.value
    ));
    /* eslint-enable no-underscore-dangle */

    dispatch(selectProfile(selectedProfile));
  }

  render() {
    /* eslint-disable no-underscore-dangle */
    return (
      <div>
        <ProfileList
          profiles={this.props.profiles}
          selectedProfileId={this.props.selectedProfile._id}
          onSelectProfile={this.boundHandleSelectProfile}
        />
        { this.props.selectedProfile &&
          <ProfileDetail profile={this.props.selectedProfile} />
        }
      </div>
    );
    /* eslint-enable no-underscore-dangle */
  }
}

ProfileListContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  profiles: React.PropTypes.array,
  selectedProfile: React.PropTypes.object,
};

ProfileListContainer.defaultProps = {
  profiles: [],
  selectedProfile: {},
};

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    selectedProfile: state.profile,
  };
}

export default connect(mapStateToProps)(ProfileListContainer);
