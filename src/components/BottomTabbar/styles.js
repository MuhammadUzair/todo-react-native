import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { darkGrey } from '../../assets/styles';
export default StyleSheet.create({
  container: {
    height: verticalScale(50),
    marginTop: verticalScale(1),
    borderRadius: 2,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1.3,
    backgroundColor: '#FFFFFF'
  },
  iconMargin: {
    marginHorizontal: verticalScale(20)
  }
});
