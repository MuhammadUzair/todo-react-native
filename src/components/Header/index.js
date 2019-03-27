import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../assets/styles';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default props => {
  const { text, buttonStyle, onpress } = props;

  return (
    <LinearGradient
      colors={['#73E186', '#4CDA64', '#73E186']}
      style={[styles.linearGradient, buttonStyle && buttonStyle]}
    >
      <Text style={[globalStyles.boldFontFace, styles.text]}>
        {' '}
        {text && text}
      </Text>
    </LinearGradient>
  );
};
