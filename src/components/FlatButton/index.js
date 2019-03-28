import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles, baseRed } from '../../assets/styles';
import styles from './styles';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default props => {
  const { text, buttonStyle, onpress, backgroundColor } = props;

  if (backgroundColor)
    return (
      <TouchableOpacity onPress={onpress && onpress}>
        <LinearGradient
          colors={['#73E186', '#4CDA64', '#73E186']}
          style={[styles.linearGradient, buttonStyle && buttonStyle]}
        >
          <Text style={[globalStyles.boldFontFace, styles.text]}>
            {' '}
            {text && text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  return (
    <Button
      mode="outlined"
      onPress={onpress && onpress}
      color={baseRed}
      style={[styles.buttonContentStyle, buttonStyle && buttonStyle]}
    >
      {text && text}
    </Button>
  );
};
