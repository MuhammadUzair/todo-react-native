import AsyncStorage from '@react-native-community/async-storage';
import { USER, USER_SUCCESSUFL, USER_FAILED, USER_RESET } from '../actions/';

export default (state = { name: '', status: '' }, action) => {
  switch (action.type) {
    case USER_RESET: {
      AsyncStorage.clear();
      return { name: '', status: '' };
    }
    case USER:
      return { ...state, status: 'inprocess' };
    case USER_SUCCESSUFL:
      return { ...action.data, status: 'success' };
    case USER_FAILED:
      return { ...state, status: 'failed' };
    default:
      return state;
  }
};
