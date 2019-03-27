import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { os } from '../utils';

const screen = Dimensions.get('window');

export const greyColor = '#2c2c2c';
export const baseGreen = '#4CDA64';
export const baseRed = '#d63031';
export const baseBlue = '#4879d5';
export const baseGrey = '#E7E7E7';
export const darkGrey = '#7B919E';

//circle color
export const blueCircle = '#4990E2';
export const greenCircle = '#DFF5C7';
export const redCircle = '#FEFCFC';
export const purpleCircle = '#EEC3F8';
export const yellowCircle = '#FDF2E2';
//circle color

export const globalStyles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },

  flexHorizontal: {
    flexDirection: 'row'
  },

  flexVertical: {
    flexDirection: 'column'
  },

  flexHCenter: {
    alignItems: 'center'
  },

  flexVCenter: {
    justifyContent: 'center'
  },

  flexVBottom: {
    justifyContent: 'flex-end'
  },

  flexVTop: {
    justifyContent: 'flex-start'
  },

  flexSpaceBetween: {
    justifyContent: 'space-between'
  },
  boldFontFace: {
    fontWeight: 'bold',
    fontStyle: 'normal'
  },

  baseFontSize: {
    fontSize: scale(14)
  },

  subTextFontSize: {
    fontSize: scale(10)
  },
  smallFontSize: {
    fontSize: scale(8)
  },

  circularCircle: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#88c3ff',
    padding: 5,
    textAlign: 'center',
    alignSelf: 'flex-end',
    position: 'relative',
    zIndex: 9
  },

  rowPadding: {
    paddingHorizontal: moderateScale(15)
  },

  // tab Icons
  tabIconStyle: {
    fontSize: scale(26),
    color: darkGrey
  }
  // tab Icons
});
