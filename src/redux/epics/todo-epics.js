import { ofType } from 'redux-observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-community/async-storage';

import { TODO, TODO_SUCCESSUFL, TODO_FAILED, TODO_RESET } from '../actions';

export const todoAction = data => ({
  type: TODO,
  data
});

const todoSuccessful = data => ({
  type: TODO_SUCCESSUFL,
  data
});

const todoFailed = data => ({
  type: TODO_FAILED,
  data
});

export const resetTodo = () => ({ type: TODO_RESET });

const gettodo = () => {
  return AsyncStorage.getItem('todo');
};
const storetodo = todo =>
  AsyncStorage.setItem('todo', JSON.stringify({ todo }));

export default action$ =>
  action$.pipe(
    ofType(TODO),
    switchMap(action => {
      const req =
        action.data && action.data.isSave
          ? storetodo(action.data.todo).then(() =>
              todoSuccessful({ todo: action.data.todo })
            )
          : gettodo()
              .then(res => JSON.parse(res))
              .then(async res => {
                if (res && res.todo) return todoSuccessful(res);
                return todoFailed(res);
              });
      return from(req).pipe(
        catchError(err => {
          return of(todoFailed(err));
        })
      );
    })
  );
