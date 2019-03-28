import { combineEpics } from 'redux-observable';

import userEpic from './user-epics';
import todoEpic from './todo-epics';

export default combineEpics(userEpic, todoEpic);
