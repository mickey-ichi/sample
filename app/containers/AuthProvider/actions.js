/*
 *
 * AuthProvider actions
 *
 */

import { CHANGE_AUTHENTICATE, LOGOUT } from './constants';

export function changeAuthenticate(auth) {
  return {
    type: CHANGE_AUTHENTICATE,
    auth,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
