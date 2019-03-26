import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles } from '../../assets/styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // console.log('getUser ', props);
    this.props.getUser();
  }

  componentDidUpdate() {
    const {
      user: { name },
      navigation: { navigate }
    } = this.props;
    if (name) navigate('Dashboard');
  }

  render() {
    return (
      <>
        <TouchableOpacity
          style={[{ backgroundColor: 'white' }]}
          onPress={() => this.props.navigation.navigate('Dashboard')}
          // onPress={() => {
          //   AsyncStorage.setItem('user', JSON.stringify({ name: 'uzair' }));
          // }}
        >
          <Text
            style={[
              styles.headerText,
              globalStyles.appBaseFontColor,
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
