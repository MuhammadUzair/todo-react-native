import { LOGIN, LOGIN_SUCCESSUFL, LOGIN_FAILED, RESET } from '../actions/';

export default (state = { name: '', status: '' }, action) => {
  switch (action.type) {
    case RESET:
      return { name: '', status: '' };
    case LOGIN:
      return { ...state, status: 'inprocess' };
    case LOGIN_SUCCESSUFL:
      return { name: action.data, status: 'success' };
    case LOGIN_FAILED:
      return { ...state, status: 'failed' };
    default:
      return state;
  }
};
