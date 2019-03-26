import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import OverlayIndicator from '../../components/OverlayIndicator';
import FlatButton from '../../components/FlatButton';
import UserInput from '../../components/UserInput';
import { globalStyles } from '../../assets/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
    this.props.getUser();
  }

  componentDidUpdate() {
    const {
      user: { name },
      navigation: { navigate }
    } = this.props;
    if (name) navigate('Dashboard');
  }

  onUserNameChange = userName => {
    this.setState({ userName });
  };

  onSubmit = () => {
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <>
        <View
          style={[
            globalStyles.flexContainer,
            globalStyles.flexVCenter,
            globalStyles.flexHCenter
          ]}
        >
          <Icon name="shield-check" style={styles.shieldIcon} />
          <Text style={styles.heading}>Tod</Text>
          <Text style={styles.heading}>0</Text>
        </View>
        <View style={globalStyles.rowPadding}>
          <UserInput
            value={this.state.userName}
            onChangeText={this.onUserNameChange}
            placeholder="Name"
            inputStyle={styles.userInput}
          />
          <FlatButton
            text="Login"
            buttonStyle={styles.loginButton}
            onpress={this.onSubmit}
          />
        </View>

        {false ? <OverlayIndicator /> : null}
      </>
    );
  }
}
