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
        .set('profile', fromJS(action.auth.profile));
    case LOGOUT:
      localStorage.removeItem('auth');
      return state.set('isAuthenticated', false).set('profile', fromJS({}));
    default:
      return state;
  }
}

export default authProviderReducer;
