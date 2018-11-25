import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */
const selectRegister = state => state.get('register', initialState);

/**
 * Select the auth
 */
const makeStep = () =>
  createSelector(selectRegister, registerState => registerState.get('step'));

export { selectRegister, makeStep };
