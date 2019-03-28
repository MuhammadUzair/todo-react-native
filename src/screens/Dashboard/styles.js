import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { greyColor } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  todoRow: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10)
  },
  todoTextWrap: {
    marginLeft: scale(10)
  },
  compeltedTodoTextStyle: {
    textDecorationLine: 'line-through',
    color: greyColor
  },
  compeltedDateTextStyle: {
    color: greyColor
  },
  circleStyle: {
    marginTop: verticalScale(10),
    marginLeft: scale(10)
  }
});
