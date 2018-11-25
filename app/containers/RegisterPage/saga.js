import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REGISTER_USER } from './constants';

/**
 * Github repos request/response handler
 */
export function* registerUser() {}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(REGISTER_USER, registerUser);
}
