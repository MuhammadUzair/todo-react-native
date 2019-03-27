import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoutButton: {
    marginBottom: verticalScale(10),
    marginHorizontal: scale(10)
  }
});
