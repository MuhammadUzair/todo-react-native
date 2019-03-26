import { StyleSheet } from 'react-native';
import { os } from '../../utils';

export default StyleSheet.create({
  activityIndicatorWrap: {
    backgroundColor: 'rgb(230,230,230)',
    borderRadius: 50,
    flex: 0,
    padding: 5,
    paddingLeft: os() ? 8 : 5,
    paddingTop: os() ? 8 : 5
  }
});
