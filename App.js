import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';
import {name as appName} from './app.json';

import usePersistedState from './src/utils/usePersistedState';
import { themes } from './src/styles';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', themes.Light);
  console.log(theme);
  
  return (
    <ThemeProvider theme={theme ? theme : {}}>
      <StatusBar hidden barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes /> 
    </ThemeProvider>
  );
}

console.disableYellowBox = false;

AppRegistry.registerComponent(appName, () => App);