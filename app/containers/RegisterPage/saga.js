import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { changeAuthenticate } from '../AuthProvider/actions';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './constants';

const api = {
  register(user) {
    return axios
      .post(' https://example-server-jmwtliayoy.now.sh/users', user)
      .then(response => response.data);
  },
};

/**
 * Github repos request/response handler
 */
export function* registerUser(prams) {
  const { user, resolve, reject } = prams;
  try {
    const response = yield call(api.register, user);
    yield put({ type: REGISTER_USER_SUCCESS, response });
    yield put(
      changeAuthenticate({
        isAuthenticated: true,
        profile: user,
      }),
    );
    localStorage.setItem('token', response.token);
    resolve(response);
  } catch (error) {
    yield put({ type: REGISTER_USER_ERROR, error });
    reject(error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* registerPageSaga() {
  yield takeLatest(REGISTER_USER, registerUser);
}
