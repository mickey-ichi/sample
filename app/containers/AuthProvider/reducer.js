/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_AUTHENTICATE, LOGOUT } from './constants';

export const initialState = fromJS({
  isAuthenticated: false,
  profile: {},
});

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTHENTICATE:
      return state
        .set('isAuthenticated', action.auth.isAuthenticated)
        .set('profile', action.auth.profile);
    case LOGOUT:
      return state.set('isAuthenticated', false).set('profile', {});
    default:
      return state;
  }
}

export default authProviderReducer;
