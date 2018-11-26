/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_STEP, UPDATE_USER, STEP_GET_STATED } from './constants';

export const initialState = fromJS({
  step: STEP_GET_STATED,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: 'teacher',
    language: '',
    country: '',
    timezone: '',
    birthYear: '',
  },
});

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return state.set('user', fromJS(action.user));
    case CHANGE_STEP:
      return state.set('step', action.step);
    default:
      return state;
  }
}

export default authProviderReducer;
