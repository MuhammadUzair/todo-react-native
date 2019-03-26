import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles } from '../../assets/styles';

export default class Dashboard extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <>
        <TouchableOpacity style={[{ backgroundColor: 'white' }]}>
          <Text style={[styles.headerText, globalStyles.highlightColor]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        {false ? <OverlayIndicator /> : null}
      </>
    );
  }
}
