import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {Stacknavigator} from './presentation/navigator/StackNavigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};
export const ComponentsApp = () => {
  return (
    <AppState>
      <Stacknavigator />
    </AppState>
  );
};
