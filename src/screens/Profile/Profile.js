import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { globalStyles } from '../../assets/styles';

export default class Profile extends Component {
  state = {
    user: []
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={[{ backgroundColor: 'white' }]}>
          <Text
            style={[
              styles.headerText,
              globalStyles.highlightColor,
              { paddingTop: 10 }
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: 'white' }]}
          onPress={() =>
            this.props.navigation.dangerouslyGetParent().navigate('Login')
          }
        >
          <Text
            style={[
              styles.headerText,
              globalStyles.highlightColor,
              { paddingTop: 10 }
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
