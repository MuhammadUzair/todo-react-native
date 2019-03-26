import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { globalStyles } from '../../assets/styles';

export default class AddTodo extends Component {
  state = {
    user: []
  };

  render() {
    return (
      <TouchableOpacity style={[{ backgroundColor: 'white' }]}>
        <Text
          style={[
            styles.headerText,
            globalStyles.highlightColor,
            { paddingTop: 10 }
          ]}
        >
          AddTodo
        </Text>
      </TouchableOpacity>
    );
  }
}
