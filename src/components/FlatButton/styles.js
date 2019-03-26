import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
const { height, width } = Dimensions.get('window');
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  linearGradient: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(10)
  },
  text: {
    textAlign: 'center'
  }
});
