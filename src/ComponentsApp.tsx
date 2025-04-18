import 'react-native-gesture-handler';

import React from 'react';
import {Stacknavigator} from './presentation/navigator/StackNavigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Stacknavigator />
    </ThemeProvider>
  );
};
