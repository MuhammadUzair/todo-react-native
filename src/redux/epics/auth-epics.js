import { ofType } from 'redux-observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-community/async-storage';

import { LOGIN, LOGIN_SUCCESSUFL, LOGIN_FAILED, RESET } from '../actions/';

export const loginUserAction = data => ({
  type: LOGIN,
  data
});

const loginSuccessful = data => ({
  type: LOGIN_SUCCESSUFL,
  data
});

const loginFailed = data => ({
  type: LOGIN_FAILED,
  data
});

export const reset = () => ({ type: RESET });

export default action$ =>
  action$.pipe(
    ofType(LOGIN),
    switchMap(action => {
      const req = AsyncStorage.getItem('user')
        .then(res => res.json())
        .then(async res => {
          if (res) return loginSuccessful(res);
          return loginFailed(res);
        });
      return from(req).pipe(catchError(err => of(loginFailed(err))));
    })
  );
