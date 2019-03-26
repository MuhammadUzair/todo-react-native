import { StyleSheet, Dimensions } from 'react-native';
import { os } from '../../utils';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: os() ? 10 : 0,
    paddingHorizontal: os() ? 10 : 0,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 2.5
  },
  withdrawLinkText: {
    fontSize: 16,
    textAlign: 'center'
  },
  withdrawContent: {
    // alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  saveButtonWrap: {
    // marginLeft: width * 0.04,
    marginTop: 20,
    width: '100%'
  },
  bigPrimaryButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    // width: width * 0.85
    width: '100%'
  },
  bigPrimaryButtonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  contentheading: {
    fontSize: 24,
    marginBottom: 10
  },
  currencySign: {
    position: 'absolute',
    top: os() ? 10 : 17,
    right: width * 0.04
  },
  mainContainer: {
    height: height,
    backgroundColor: 'white'
  },
  amountTextInput: {
    width: '90%'
  },
  errorText: {
    paddingTop: os() ? 10 : 0,
    paddingHorizontal: os() ? 10 : 0
  }
});
