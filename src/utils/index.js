import { Platform } from 'react-native';
import moment from 'moment';
import UUID from 'uuid/v1';

export const os = () => Platform.OS === 'ios';

export const generateUniqueID = () => UUID().substr(0, 8); //unique id timestamp based

export const renderFormatedDate = dueDate => {
  let getFormatedDate = moment(new Date(dueDate)).fromNow();
  if (getFormatedDate == 'a day ago') getFormatedDate = 'tomorrow';
  if (getFormatedDate == 'in a day') getFormatedDate = 'yesterday';
  return 'Due ' + getFormatedDate;
};
