import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */
const selectAuth = state => state.get('auth', initialState);

/**
 * Select the auth
 */
const makeIsAuthenticated = () =>
  createSelector(selectAuth, authState => authState.get('isAuthenticated'));

const makeProfile = () =>
  createSelector(selectAuth, authState => authState.get('profile'));

export { makeIsAuthenticated, makeProfile };
