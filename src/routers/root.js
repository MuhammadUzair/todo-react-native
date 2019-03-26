import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginScreen from '../screens/Login/';
import BottomRouter from './bottom-router';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    BottomRouter: BottomRouter
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default RootStack;
