import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
const { height, width } = Dimensions.get('window');

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
