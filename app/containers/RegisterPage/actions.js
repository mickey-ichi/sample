/*
 *
 * RegisterPage actions
 *
 */

import { REGISTER_USER, CHANGE_STEP, UPDATE_USER } from './constants';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}

export function changeStep(step) {
  return {
    type: CHANGE_STEP,
    step,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}
