import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  userInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
