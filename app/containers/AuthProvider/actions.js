/*
 *
 * AuthProvider actions
 *
 */

import { CHANGE_AUTHENTICATE } from './constants';

export function changeAuthenticate(auth) {
  return {
    type: CHANGE_AUTHENTICATE,
    auth,
  };
}
