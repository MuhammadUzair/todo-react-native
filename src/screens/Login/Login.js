import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles } from '../../assets/styles';

export default class Login extends Component {
  state = {
    user: []
  };

  render() {
    return (
      <>
        <TouchableOpacity
          style={[{ backgroundColor: 'white' }]}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        >
          <Text
            style={[
              styles.headerText,
              globalStyles.highlightColor,
              { paddingTop: 10 }
            ]}
          >
            logIn
          </Text>
        </TouchableOpacity>
        {false ? <OverlayIndicator /> : null}
      </>
    );
  }
}
