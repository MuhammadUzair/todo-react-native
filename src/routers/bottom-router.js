import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
// import { Icon } from 'react-native-elements';

import { greyColor, globalStyles } from '../assets/styles';

import Profile from '../screens/Profile/';
import Dashboard from '../screens/Dashboard/';
import AddTodo from '../screens/AddTodo/';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Dashboard,
    AddTodo,
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log('routeName ', routeName);
        return (
          <Image
            style={{
              width: 24,
              height: 24
            }}
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          />
        );
      },
      tabBarOnPress: () => {
        const {
          navigate,
          popToTop,
          state: { routeName }
        } = navigation;
        popToTop();
        navigate(routeName);
      }
    }),
    tabBarLabel: {},
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  }
);
export default BottomTabNavigator;

// export default BottomRouter;
