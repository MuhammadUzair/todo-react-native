import AsyncStorage from '@react-native-community/async-storage';
import { TODO, TODO_SUCCESSUFL, TODO_FAILED, TODO_RESET } from '../actions/';

export default (state = { todo: [], status: '' }, action) => {
  switch (action.type) {
    case TODO_RESET: {
      AsyncStorage.removeItem('todo');
      return { todo: [], status: '' };
    }
    case TODO:
      return { ...state, status: 'inprocess' };
    case TODO_SUCCESSUFL:
      return { ...action.data, status: 'success' };
    case TODO_FAILED:
      return { ...state, status: 'failed' };
    default:
      return state;
  }
};
