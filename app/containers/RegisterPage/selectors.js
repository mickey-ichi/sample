import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */
const selectRegister = state => state.get('register', initialState);

/**
 * Select the User
 */
const makeStep = () =>
  createSelector(selectRegister, registerState => registerState.get('step'));

const makeUser = () =>
  createSelector(selectRegister, registerState =>
    registerState.get('user').toJS(),
  );

export { selectRegister, makeStep, makeUser };
