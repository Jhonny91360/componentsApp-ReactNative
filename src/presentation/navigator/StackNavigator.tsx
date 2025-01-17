import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const Stacknavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
