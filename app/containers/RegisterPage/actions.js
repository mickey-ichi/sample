/*
 *
 * RegisterPage actions
 *
 */

import { REGISTER_USER, CHANGE_STEP } from './constants';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}

export function changeStep() {
  return {
    type: CHANGE_STEP,
  };
}
