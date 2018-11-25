/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_AUTHENTICATE } from './constants';

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
    default:
      return state;
  }
}

export default authProviderReducer;
