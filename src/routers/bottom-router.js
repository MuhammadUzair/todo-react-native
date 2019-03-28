import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import BottomTabbar from '../components/BottomTabbar';

import Profile from '../screens/Profile/';
import Dashboard from '../screens/Dashboard/';
import AddTodo from '../screens/AddTodo/';

import { baseGrey, baseGreen } from '../assets/styles';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Dashboard,
    AddTodo,
    Profile
  },
  {
    tabBarLabel: {},
    tabBarComponent: props => <BottomTabbar {...props} />,
    tabBarOptions: {
      activeTintColor: baseGreen,
      inactiveTintColor: baseGrey,
      showLabel: false
    }
  }
);
export default BottomTabNavigator;
