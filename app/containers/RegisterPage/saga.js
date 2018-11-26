import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './constants';

const api = {
  register(user) {
    console.log(user);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: 'success' });
      }, 1000);
    });
  },
};

/**
 * Github repos request/response handler
 */
export function* registerUser(prams) {
  const { user } = prams;
  try {
    console.log(user);
    const response = yield call(api.register, user);
    console.log(response);
    yield put({ type: REGISTER_USER_SUCCESS }, response);
  } catch (error) {
    yield put({ type: REGISTER_USER_ERROR }, error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(REGISTER_USER, registerUser);
}
