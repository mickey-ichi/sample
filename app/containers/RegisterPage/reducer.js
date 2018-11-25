/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_STEP } from './constants';

export const initialState = fromJS({
  step: 0,
});

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STEP:
      return state.set('step', action.step);
    default:
      return state;
  }
}

export default authProviderReducer;
