import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';
import { baseGreen } from './src/assets/styles';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: baseGreen
  }
};

const AppWrapper = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
