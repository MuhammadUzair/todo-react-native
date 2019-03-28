import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import FlatButton from '../../components/FlatButton';

export default class Profile extends Component {
  onSubmit = () => {
    this.props.resetUser();
    this.props.navigation.dangerouslyGetParent().navigate('Login');
  };

  render() {
    const {
      user: { name }
    } = this.props;

    return (
      <View style={styles.container}>
        <Header text={name ? 'Hello, ' + name : ''} />
        <FlatButton
          text="Logout"
          buttonStyle={styles.logoutButton}
          onpress={this.onSubmit}
          backgroundColor={false}
        />
      </View>
    );
  }
}
