import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { globalStyles, baseGreen } from '../../assets/styles';
import styles from './styles';

export default () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        globalStyles.flexHCenter,
        globalStyles.flexVCenter
      ]}
    >
      <View
        style={[
          globalStyles.flexHCenter,
          globalStyles.flexVCenter,
          styles.activityIndicatorWrap
        ]}
      >
        <ActivityIndicator size="large" color={baseGreen} />
      </View>
    </View>
  );
};
