import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../../assets/styles';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BottomTabbar extends Component {
  changeRoute = name => {
    const { navigate, popToTop } = this.props.navigation;
    navigate(name);
  };

  renderIcon(routeName) {
    const {
      activeTintColor,
      inactiveTintColor,
      navigation: {
        state: { index }
      }
    } = this.props;

    switch (routeName) {
      case 'Dashboard':
        return (
          <Ionicons
            name="md-list-box"
            style={[
              globalStyles.tabIconStyle,
              { color: index == 0 ? activeTintColor : inactiveTintColor }
            ]}
          />
        );
      case 'AddTodo':
        return (
          <Icon
            name="add"
            style={[
              globalStyles.tabIconStyle,
              { color: index == 1 ? activeTintColor : inactiveTintColor }
            ]}
          />
        );
      case 'Profile':
        return (
          <Icon
            name="person"
            style={[
              globalStyles.tabIconStyle,
              { color: index == 2 ? activeTintColor : inactiveTintColor }
            ]}
          />
        );

      default:
        return (
          <Icon
            name="application"
            style={[
              globalStyles.tabIconStyle,
              { color: index == 0 ? activeTintColor : inactiveTintColor }
            ]}
          />
        );
    }
  }
  render() {
    const { smallCircle, color, circleStyle, onPress, isActive } = this.props;
    return (
      <View
        style={[
          globalStyles.flexHorizontal,
          globalStyles.flexVCenter,
          styles.container
        ]}
      >
        <TouchableOpacity
          onPress={() => this.changeRoute('Dashboard')}
          style={styles.iconMargin}
        >
          {this.renderIcon('Dashboard')}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.changeRoute('AddTodo')}
          style={styles.iconMargin}
        >
          {this.renderIcon('AddTodo')}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.changeRoute('Profile')}
          style={styles.iconMargin}
        >
          {this.renderIcon('Profile')}
        </TouchableOpacity>
      </View>
    );
  }
}
