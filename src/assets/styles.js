import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { os } from '../utils';

const screen = Dimensions.get('window');

export const greyColor = '#2c2c2c';
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
        fontStyle: 'normal',
        color: greyColor
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

    highlightColor: {
        color: '#4287e1'
    },

    highlightBorder: {
        borderColor: '#88c3ff',
        borderWidth: 0.5
    },

    whiteBackgroudColor: {
        backgroundColor: '#FFFFFF'
    },

    greenBackgroudColor: {
        backgroundColor: '#4cd964'
    },

    blueBackgroudColor: {
        backgroundColor: '#4287e1'
    },

    greyBackgroudColor: {
        backgroundColor: '#FAFAFA'
    },
    darkGrayBackgroudColor: {
        backgroundColor: darkGrey
    },

    mediumGreyBackgroudColor: {
        backgroundColor: '#E7E7E7'
    },

    paleRedBackgroudColor: {
        backgroundColor: '#ff2458'
    },

    whiteColor: {
        color: '#FFFFFF'
    },

    blackColor: {
        color: '#000000'
    },

    greyColor: {
        color: '#333'
    },
    greyLightColor: {
        color: '#555'
    },

    baseGreyColor: {
        color: '#79909e'
    },

    placeHolderGreyColor: {
        color: '#585858'
    },

    headingBlackColor: {
        color: '#4c4c4c'
    },

    navIconGreyColor: {
        color: '#c8d0ef'
    },

    baseBlueColor: {
        color: '#4879d5'
    },

    highlightBlueColor: {
        color: '#4879d5'
    },

    highlightPinkColor: {
        color: '#fa5aab'
    },
    errorColor: {
        color: '#aa0000'
    },

    highlightGreenColor: {
        color: '#4cd964'
    },

    paleRedColor: {
        color: '#ff2458'
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

    mediumHeight: {
        height: 50
    },

    smallHeight: {
        height: 30
    },
    largeWidth: {
        width: 70
    },
    mediumWidth: {
        width: 50
    },

    smallWidth: {
        width: 30
    },

    hairLineUnderBorder: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#f5f5f5'
    },
    keyboardAwareScrollView: {
        height: screen.height
    }
});

export const loginStyles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: screen.width - 25,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    bottomSpacing: {
        marginBottom: os() ? 12 : 6
    },

    inputContainer: {
        borderRadius: os() ? 50 : 30,
        paddingVertical: os() ? 15 : 0,
        paddingHorizontal: os() ? 10 : 0
    },

    passwordField: {
        width: 82 + '%',
        paddingHorizontal: os() ? 0 : 15
    },

    emailField: {
        paddingHorizontal: os() ? 0 : 15
    },

    checkbox: {
        borderWidth: 0,
        backgroundColor: '#FFF',
        padding: 0,
        margin: 0
    },

    bigPrimaryButton: {
        paddingVertical: os() ? 20 : 15,
        paddingHorizontal: os() ? 25 : 20,
        borderRadius: 50,
        flexDirection: 'row',
        width: os() ? 80 + '%' : 70 + '%'
    },

    bigPrimaryButtonText: {
        fontSize: 18
    },

    secondaryButton: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    resetMsg: {
        marginBottom: 111
    },
    lgBottomSpacing: {
        marginBottom: os() ? 43 : 18
    }
});
