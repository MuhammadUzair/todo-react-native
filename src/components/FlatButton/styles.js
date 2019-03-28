import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { baseRed } from '../../assets/styles';
export default StyleSheet.create({
  linearGradient: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(10)
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  buttonContentStyle: {
    backgroundColor: 'white',
    borderColor: baseRed,
    borderWidth: 1
  }
});
