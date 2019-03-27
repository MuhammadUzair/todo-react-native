import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        // console.log('routeName ', routeName, tintColor);
        switch (routeName) {
          case 'AddTodo':
            return <Icon name="add" style={[globalStyles.tabIconStyle]} />;
          case 'Profile':
            return <Icon name="person" style={globalStyles.tabIconStyle} />;
          case 'Dashboard':
            return (
              <Ionicons name="md-list-box" style={globalStyles.tabIconStyle} />
            );
          default:
            return (
              <Icon name="application" style={globalStyles.tabIconStyle} />
            );
        }
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
