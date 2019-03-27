import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { baseGreen } from '../../assets/styles';

export default StyleSheet.create({
  shieldIcon: {
    color: baseGreen,
    fontSize: scale(60)
  },
  heading: {
    fontSize: scale(16),
    fontWeight: 'bold'
  },
  userInput: {
    marginBottom: verticalScale(20),
    borderWidth: 0.2,
    paddingLeft: scale(5)
  },
  loginButton: {
    marginBottom: verticalScale(20)
  }
});
