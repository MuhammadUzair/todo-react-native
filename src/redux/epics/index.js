import { combineEpics } from 'redux-observable';

// import getUser from './auth-epics';
import getUser from './user-epics';

export default combineEpics(getUser);
