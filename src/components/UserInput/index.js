import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default props => {
  const { value, onChangeText, placeholder, inputStyle, multiline } = props;
  return (
    <TextInput
      style={[styles.userInput, inputStyle && inputStyle]}
      onChangeText={text => onChangeText && onChangeText(text)}
      value={value && value}
      placeholder={placeholder && placeholder}
      autoCorrect={false}
      underlineColorAndroid="transparent"
      multiline={multiline ? multiline : false}
    />
  );
};
