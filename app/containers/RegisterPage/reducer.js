/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_STEP, STEP_GET_STATED, STEP_INFORMATION } from './constants';

export const initialState = fromJS({
  step: STEP_INFORMATION,
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
