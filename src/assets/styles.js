import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { os } from '../utils';

const screen = Dimensions.get('window');

export const greyColor = '#2c2c2c';
export const baseGreen = '#4CDA64';
export const baseBlue = '#4879d5';
export const baseGrey = '#E7E7E7';
export const darkGrey = '#7B919E';
export const baseBlack = '#000000';
export const onboardGrey = '#585858';
export const seperatorColor = '#f5f5f5';

export const globalStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: os() ? 10 : 15
  },

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

  fullScreen: {
    width: 100 + '%',
    height: 100 + '%'
  },

  fullWidth: {
    width: 100 + '%'
  },

  fullHeight: {
    height: 100 + '%'
  },

  fontFace: {
    fontWeight: '300',
    fontStyle: 'normal'
  },

  headingFontFace: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 5
  },

  boldFontFace: {
    fontWeight: 'bold',
    fontStyle: 'normal'
  },

  baseFontSize: {
    fontSize: scale(12)
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
  }
});
