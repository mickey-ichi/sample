/*
 *
 * RegisterPage actions
 *
 */

import { REGISTER_USER } from './constants';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}
