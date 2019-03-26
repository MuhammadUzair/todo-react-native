import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles, baseBlue } from '../../assets/styles';
import styles from './styles';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default props => {
  const { text, buttonStyle, onpress } = props;

  return (
    <TouchableOpacity onPress={onpress && onpress}>
      <LinearGradient
        colors={['#73E186', '#4CDA64']}
        style={[styles.linearGradient, buttonStyle && buttonStyle]}
      >
        <Text style={styles.text}> {text && text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
