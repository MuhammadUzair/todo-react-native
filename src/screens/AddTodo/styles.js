import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { baseGrey } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  userInput: {
    marginVertical: verticalScale(20),
    marginHorizontal: scale(20),
    height: verticalScale(100),
    borderWidth: 0.2,
    paddingLeft: scale(5),
    borderColor: baseGrey,
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  datePickerWrap: {
    marginVertical: verticalScale(20),
    marginTop: 0,
    marginHorizontal: scale(20),
    height: verticalScale(40),
    borderWidth: 0.2,
    paddingLeft: scale(5),
    borderColor: baseGrey,
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  datePickerText: {
    paddingTop: verticalScale(10),
    textAlignVertical: 'center'
  },
  tagsWrap: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20)
  },
  circleStyle: {
    marginRight: scale(23)
  },
  addButtonStyle: {
    marginHorizontal: scale(20)
  }
});
