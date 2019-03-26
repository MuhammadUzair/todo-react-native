import { ofType } from 'redux-observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-community/async-storage';

import { USER, USER_SUCCESSUFL, USER_FAILED, USER_RESET } from '../actions/';

export const userAction = data => ({
  type: USER,
  data
});

const userSuccessful = data => ({
  type: USER_SUCCESSUFL,
  data
});

const userFailed = data => ({
  type: USER_FAILED,
  data
});

export const resetUser = () => ({ type: USER_RESET });

export default action$ =>
  action$.pipe(
    ofType(USER),
    switchMap(action => {
      const req = AsyncStorage.getItem('user')
        .then(res => JSON.parse(res))
        .then(async res => {
          if (res && res.name) return userSuccessful(res);
          return userFailed(res);
        });
      return from(req).pipe(
        catchError(err => {
          return of(userFailed(err));
        })
      );
    })
  );
