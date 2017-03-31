import fetchJsonp from 'fetch-jsonp';

export const RECEIVE_PROFILES = 'RECEIVE_PROFILES';

export function receiveProfiles(json) {
  return {
    type: RECEIVE_PROFILES,
    profiles: json,
  };
}

export const FETCH_PROFILES_ERROR = 'FETCH_PROFILES_ERROR';

export function fetchProfileError(error) {
  return {
    error,
    type: FETCH_PROFILES_ERROR,
  };
}

export const FETCH_PROFILES = 'FETCH_PROFILES';

function fetchProfiles() {
  return {
    type: FETCH_PROFILES,
  };
}

export function getProfiles() {
  return function getProfilesThunk(dispatch) {
    dispatch(fetchProfiles());

    fetchJsonp('http://192.168.99.100:3000/admin/profiles')
      .then((response) => {
        if (!response.ok) {
          dispatch(fetchProfileError(response.statustext));
          throw new Error(response.statustext);
        } else {
          return response;
        }
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(receiveProfiles(response));
      });
  };
}

export const SELECT_PROFILE = 'SELECT_PROFILE';

export function selectProfile(profile) {
  return {
    type: SELECT_PROFILE,
    profile,
  };
}
