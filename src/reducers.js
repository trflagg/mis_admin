import { FETCH_PROFILES,
         FETCH_PROFILES_ERROR,
         RECEIVE_PROFILES,
         SELECT_PROFILE,
       } from './actions';

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function rootReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PROFILE:
      return updateObject(state, {
        profile: action.profile,
      });

    case FETCH_PROFILES:
      return updateObject(state, {
        isFetchingProfiles: true,
      });

    case FETCH_PROFILES_ERROR:
      return updateObject(state, {
        isFetchingProfiles: false,
        error: action.error,
      });

    case RECEIVE_PROFILES:
      return updateObject(state, {
        isFetchingProfiles: false,
        profiles: action.profiles,
      });

    default:
      return state;
  }
}

export default rootReducer;
