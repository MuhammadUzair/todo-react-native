import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  }
});
