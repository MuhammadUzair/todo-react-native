import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  blueCircle,
  greenCircle,
  redCircle,
  purpleCircle,
  yellowCircle
} from '../../assets/styles';
import styles from './styles';

const getColorCode = color => {
  switch (color) {
    case 'blueCircle':
      return blueCircle;
    case 'greenCircle':
      return greenCircle;
    case 'redCircle':
      return redCircle;
    case 'purpleCircle':
      return purpleCircle;
    case 'yellowCircle':
      return yellowCircle;
    default:
      return 'white';
  }
};

export default props => {
  const { smallCircle, color, circleStyle, onPress, isActive } = props;
  return (
    <TouchableOpacity onPress={onPress && onPress}>
      <View
        style={[
          styles.circle,
          smallCircle ? styles.smallWidth : styles.bigWidth,
          { backgroundColor: getColorCode(color) },
          circleStyle && circleStyle
        ]}
        opacity={isActive ? 1 : 0.2}
      />
    </TouchableOpacity>
  );
};
