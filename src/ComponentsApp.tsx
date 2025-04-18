import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {PropsWithChildren, useContext} from 'react';
import {Stacknavigator} from './presentation/navigator/StackNavigator';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';

const AppNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <AppNavigation>
      <ThemeProvider>{children}</ThemeProvider>
    </AppNavigation>
  );
};
export const ComponentsApp = () => {
  return (
    <AppTheme>
      <Stacknavigator />
    </AppTheme>
  );
};
