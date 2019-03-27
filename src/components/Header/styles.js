import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  linearGradient: {
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(40),
    paddingBottom: verticalScale(10)
  },
  text: {
    fontSize: scale(30),
    color: 'white'
  }
});
