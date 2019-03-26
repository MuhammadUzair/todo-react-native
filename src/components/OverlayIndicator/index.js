import React from 'react';
import { ActivityIndicator, View, Platform, StyleSheet } from 'react-native';
import { globalStyles, baseBlue } from '../../assets/styles';

export const os = () => Platform.OS === 'ios';

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
          {
            backgroundColor: 'rgb(230,230,230)',
            borderRadius: 50,
            flex: 0,
            padding: 5,
            paddingLeft: os() ? 8 : 5,
            paddingTop: os() ? 8 : 5
          }
        ]}
      >
        <ActivityIndicator size="large" color={baseBlue} />
      </View>
    </View>
  );
};
