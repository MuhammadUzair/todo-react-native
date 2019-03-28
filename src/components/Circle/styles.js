import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { baseRed } from '../../assets/styles';
export default StyleSheet.create({
  circle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigWidth: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  smallWidth: {
    width: 18,
    height: 18,
    borderRadius: 9
  }
});
