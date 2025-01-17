import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Stacknavigator} from './presentation/navigator/StackNavigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Stacknavigator />
    </NavigationContainer>
  );
};
